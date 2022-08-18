import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Hike } from "./entity/Hike"

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: ['**/?(*.)+(entity).+(ts)'],
    migrations: ['**/migration/*.ts'],
    subscribers: [],
})
