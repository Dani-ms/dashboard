import { SimpleEntity } from 'src/internals/databases/simple-entity/simple.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Data extends SimpleEntity {
  @Column()
  name!: string;

  @Column()
  uv!: number;

  @Column()
  pv!: number;

  @Column()
  amt!: number;
}
