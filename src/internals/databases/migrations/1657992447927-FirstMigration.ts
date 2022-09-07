import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstMigration1657992447927 implements MigrationInterface {
  name = 'FirstMigration1657992447927';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.query(`
            CREATE TABLE "settings" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "forInstance" text NOT NULL,
                CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "data" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "month" integer NOT NULL,
                "uv" integer NOT NULL,
                "pv" integer NOT NULL,
                "amt" integer NOT NULL,
                CONSTRAINT "PK_2533602bd9247937e3a4861e173" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "data"
        `);
    await queryRunner.query(`
            DROP TABLE "settings"
        `);
  }
}
