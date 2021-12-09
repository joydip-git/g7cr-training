import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm'
import * as dotenv from 'dotenv'
import { ProductsSettingConstants } from '../products/constants/products-settings';

dotenv.config()
type envConfigType = {
    [key: string]: string | undefined
}

export class ConfigService {
    private static svc: ConfigService;
    static create() {
        if (!this.svc) {
            this.svc = new ConfigService(process.env)
        }
        return this.svc
    }
    private constructor(private env: envConfigType) {
        console.log('svc created')
    }
    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key]
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`)
        }

        return value
    }
    
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        const dbType = this.getValue(ProductsSettingConstants.DATABASE_TYPE)
        let type1: DatabaseType = 'sqlite';
        switch (dbType) {
            case 'postgres':
                type1 = 'postgres'
                break;
            case 'mysql':
                type1 = 'mysql'
                break;
            //...other possibilities
            default:
                break;
        }

        const options: TypeOrmModuleOptions = {
            type: type1,
            host: this.getValue(ProductsSettingConstants.POSTGRES_HOST),
            port: parseInt(this.getValue(ProductsSettingConstants.POSTGRES_PORT)),
            username: this.getValue(ProductsSettingConstants.POSTGRES_USERNAME),
            password: this.getValue(ProductsSettingConstants.POSTGRES_PASSWORD),
            database: this.getValue(ProductsSettingConstants.POSTGRES_DATABASE),
            entities: [this.getValue(ProductsSettingConstants.ENTITIES_PATH)],
            migrationsTableName: this.getValue(ProductsSettingConstants.MIGRATION_TABLE_NAME),
            migrations: [this.getValue(ProductsSettingConstants.MIGRATIONS_FILE_PATH)],
            cli: {
                migrationsDir: this.getValue(ProductsSettingConstants.MIGRATIONS_DIRECTORY)
            }
        }
        console.log(options)
        return options
    }
    public getPort() {
        return this.getValue('API_GATEWAY_PORT', true)
    }
    public isProduction() {
        const mode = this.getValue('MODE', false)
        return mode != 'DEV'
    }
    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true))
        return this
    }
}
