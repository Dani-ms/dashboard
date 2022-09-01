import 'source-map-support/register';
import 'src/internals/environment/load-environment-variables';

import { tearDownDatabases } from 'test-environment-impl/base/tear-down-databases';
import { createConnection } from 'typeorm';
import { NODE_ENV } from 'src/internals/environment/node-env.constants';
import { NodeEnv } from 'src/internals/environment/node-env.types';
import { ProcessContextManager } from 'src/internals/process/process-context-manager';
import { ProcessType } from 'src/internals/process/process-context';
import { generateRandomUUID } from 'src/internals/utils/generate-random-uuid';
import { DataRepository } from 'src/data/typeorm/data.repository';
import { AuditContext } from 'src/internals/auditing/audit-context';

if (NODE_ENV !== NodeEnv.Development) {
  throw new Error('Seed command is only for development');
}

async function seed() {
  ProcessContextManager.setContext({
    type: ProcessType.Script,
    name: 'scripts-dev:seed',
    workerId: generateRandomUUID(),
  });

  const { DEFAULT_DB_TYPEORM_CONN_OPTS_WITH_MIGRATIONS } = await import(
    'src/internals/databases/typeorm-ormconfig-with-migrations'
  );

  const defaultDBConnection = await createConnection({
    ...DEFAULT_DB_TYPEORM_CONN_OPTS_WITH_MIGRATIONS,
    entities: ['src/**/typeorm/*.entity.ts'],
  });

  await tearDownDatabases([defaultDBConnection]);

  await defaultDBConnection.runMigrations();

  const dataRepository =
    defaultDBConnection.getCustomRepository(DataRepository);

  const auditContext = new AuditContext({
    operationId: generateRandomUUID(),
    requestMethod: null,
    requestPath: null,
  });

  await dataRepository.create(
    {
      name: 'Coisas',
      uv: 200,
      pv: 400,
      amt: 600,
    },
    auditContext,
  );

  await Promise.all([defaultDBConnection.close()]);
}

seed().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
