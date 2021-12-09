import { Controller, PayloadTooLargeException } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { defer } from 'rxjs'
import CreateProductAdapter from 'src/application/products/adapters/create-product.adapter';
import DeleteProductAdapter from 'src/application/products/adapters/delete-product.adapter';
import FetchProductsAdapter from 'src/application/products/adapters/fetch-products.adapter';
import { SearchByProductIdAdapter } from 'src/application/products/adapters/search-by-productid.adapter';
import { SearchByProductNameAdapter } from 'src/application/products/adapters/search-by-productname.adapter';
import UpdateProductAdapter from 'src/application/products/adapters/update-product.adapter';
import CreateProductCommand from 'src/application/products/commands/create-product.command';
import UpdateProductCommand from 'src/application/products/commands/update-product.command';
import { ProductsCommandPatternConstants } from 'src/infrastructure/products/constants/prouducts-command-patterns';

@Controller()
export class ProductsController {
    constructor(
        private createProductAdapter: CreateProductAdapter,
        private updateProductAdapter: UpdateProductAdapter,
        private deleteProductAdapter: DeleteProductAdapter,
        private searchByProductIdAdapter: SearchByProductIdAdapter,
        private searchByProductNameAdapter: SearchByProductNameAdapter,
        private fetchProductsAdapter: FetchProductsAdapter) {
        console.log('products controller created')
    }

    @MessagePattern({ cmd: ProductsCommandPatternConstants.CREATE_PRODUCT })
    // @EventPattern(ProductsCommandPatternConstants.CREATE_PRODUCT)
    createProduct(@Payload() product: CreateProductCommand) {
        console.log('create called')
        console.log(product)
        return defer(() => {
            return this.createProductAdapter.handle(product)
        })
    }

    @MessagePattern({ cmd: ProductsCommandPatternConstants.UPDATE_PRODUCT })
    updateProduct(@Payload() product: UpdateProductCommand) {
        return defer(() => {
            return this.updateProductAdapter.handle(product)
        })
    }

    @MessagePattern({ cmd: ProductsCommandPatternConstants.DELETE_PRODUCT })
    deleteProduct(@Payload() productId: number) {
        return defer(() => {
            return this.deleteProductAdapter.handle(productId)
        })
    }

    @MessagePattern({ cmd: ProductsCommandPatternConstants.SEARCH_BY_ID })
    async getProductById(@Payload() productId: number) {
        return defer(() => {
            return this.searchByProductIdAdapter.handle(productId)
        })
    }

    @MessagePattern({ cmd: ProductsCommandPatternConstants.SEARCH_BY_NAME })
    getProductByName(@Payload() productName: string) {
        return defer(() => {
            return this.searchByProductNameAdapter.handle(productName)
        })
    }

    @MessagePattern({ cmd: ProductsCommandPatternConstants.GET_ALL })
    getAllProducts() {
        return defer(() => {
            return this.fetchProductsAdapter.handle()
        })
    }
}