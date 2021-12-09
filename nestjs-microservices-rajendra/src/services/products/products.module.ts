import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import CreateProductAdapter from 'src/application/products/adapters/create-product.adapter';
import DeleteProductAdapter from 'src/application/products/adapters/delete-product.adapter';
import FetchProductsAdapter from 'src/application/products/adapters/fetch-products.adapter';
import { SearchByProductIdAdapter } from 'src/application/products/adapters/search-by-productid.adapter';
import { SearchByProductNameAdapter } from 'src/application/products/adapters/search-by-productname.adapter';
import UpdateProductAdapter from 'src/application/products/adapters/update-product.adapter';
import { Product } from 'src/core-domain/products/adapters/entities/product.entity';
import { ProductsRepository } from 'src/core-domain/products/adapters/repositories/products.repository';
import { ProductsSettingConstants } from 'src/infrastructure/products/constants/products-settings';
import { ProductsDatabaseModule } from 'src/infrastructure/products/database/products-database.module';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        ProductsDatabaseModule,
        TypeOrmModule.forFeature([Product])
    ],
    controllers: [ProductsController],
    providers: [
        CreateProductAdapter,
        UpdateProductAdapter,
        FetchProductsAdapter,
        SearchByProductIdAdapter,
        SearchByProductNameAdapter,
        DeleteProductAdapter,
        {
            provide: ProductsSettingConstants.PRODUCTS_SERVICE,
            useClass: ProductsRepository
        }
    ],
})
export class ProductsModule { 
    constructor(){
        console.log('products module created')
    }
}
