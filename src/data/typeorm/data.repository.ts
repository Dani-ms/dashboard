import { SimpleEntityRepository } from 'src/internals/databases/simple-entity/simple-entity.repository';
import { EntityRepository } from 'typeorm';
import { Data } from './data.entity';

@EntityRepository(Data)
export class DataRepository extends SimpleEntityRepository<Data> {}
