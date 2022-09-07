import { Controller, Get } from '@nestjs/common';
import { InjectTypeormConnection } from 'src/internals/databases/inject-typeorm-connection.decorator';
import { Connection } from 'typeorm';
import { DataRepository } from './typeorm/data.repository';

@Controller('/data')
export class DataController {
  constructor(@InjectTypeormConnection() private connection: Connection) {}

  @Get()
  getAllData() {
    const repository = this.connection.getCustomRepository(DataRepository);

    return repository.dangerouslyFindAll({ order: { month: 'ASC' } });
  }
}
