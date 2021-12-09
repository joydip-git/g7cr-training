import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from 'src/infrastructure/configuration/config.service';
import { ProductsSettingConstants } from '../constants/products-settings';

@Module({
    imports: [TypeOrmModule.forRoot(
        ConfigService.create()
            .ensureValues([
                ProductsSettingConstants.POSTGRES_HOST,
                ProductsSettingConstants.POSTGRES_PORT,
                ProductsSettingConstants.POSTGRES_USERNAME,
                ProductsSettingConstants.POSTGRES_PASSWORD,
                ProductsSettingConstants.POSTGRES_DATABASE,
                ProductsSettingConstants.ENTITIES_PATH, 
                ProductsSettingConstants.MIGRATION_TABLE_NAME,
                ProductsSettingConstants.MIGRATIONS_FILE_PATH,
                ProductsSettingConstants.MIGRATIONS_DIRECTORY
            ])
            .getTypeOrmConfig()),]
})
export class ProductsDatabaseModule {
    constructor() {
        console.log('products database module created')
    }
};