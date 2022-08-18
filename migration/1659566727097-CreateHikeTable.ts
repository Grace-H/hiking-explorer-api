import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateHikeTable1659566727097 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE hikes (
                id serial PRIMARY KEY,
                hike VARCHAR(500) NOT NULL,
                city VARCHAR(200) NOT NULL,
                state VARCHAR(100) NOT NULL,
                done BOOLEAN NOT NULL,
                length INT
            );`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE hikes;`
        );
    }

}
