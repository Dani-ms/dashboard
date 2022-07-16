import { Module } from '@nestjs/common';
import { TypeormFeatureModule } from 'src/internals/databases/typeorm.module';
import { DataController } from './data.controller';
import { Data } from './typeorm/data.entity';

@Module({
  imports: [TypeormFeatureModule.forFeature({ entities: [Data] })],
  controllers: [DataController],
})
export class DataModule {}
