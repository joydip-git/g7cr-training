import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from '@nestjs/microservices'
import CreateProductCommand from "src/application/products/commands/create-product.command";
import UpdateProductCommand from "src/application/products/commands/update-product.command";
import { ProductModel } from "src/domain/products/models/product.model";
import { ProductsSettingConstants } from "src/infrastructure/products/constants/products-settings";
import { ProductsCommandPatternConstants } from "src/infrastructure/products/constants/prouducts-command-patterns";

@Injectable()
export class ProductsApiGatewayService {
    constructor(
        @Inject(ProductsSettingConstants.PRODUCTS_CLIENT_PROXY) private productsServiceClient: ClientProxy) {
        console.log('api gateway service created')

    }

    callProductsServiceToAddProduct(product: CreateProductCommand) {
        // return this.productsServiceClient.emit({ cmd: ProductsCommandPatternConstants.CREATE_PRODUCT }, product)
        return this.productsServiceClient.send<ProductModel, CreateProductCommand>({ cmd: ProductsCommandPatternConstants.CREATE_PRODUCT }, product)
    }

    callProductsServiceToUpdateProduct(productId: number, product: UpdateProductCommand) {
        // return this.productsServiceClient.emit({ cmd: ProductsCommandPatternConstants.UPDATE_PRODUCT }, product)

        return this.productsServiceClient.send<ProductModel, UpdateProductCommand>({ cmd: ProductsCommandPatternConstants.UPDATE_PRODUCT }, { ...product, productId: productId })
    }

    callProductsServiceToDeleteProductById(productId: number) {
        // return this.productsServiceClient.emit({ cmd: ProductsCommandPatternConstants.DELETE_PRODUCT }, productId)
        return this.productsServiceClient.send<ProductModel, number>({ cmd: ProductsCommandPatternConstants.DELETE_PRODUCT }, productId)
    }

    callProductsServiceToSearchProductById(productId: number) {
        // return this.productsServiceClient.emit({ cmd: ProductsCommandPatternConstants.SEARCH_BY_ID }, productId)
        return this.productsServiceClient.send<ProductModel, number>({ cmd: ProductsCommandPatternConstants.SEARCH_BY_ID }, productId)
    }

    callProductsServiceToSearchProductByName(productName: string) {
        // this.productsServiceClient.emit({ cmd: ProductsCommandPatternConstants.SEARCH_BY_NAME }, productName)
        return this.productsServiceClient.send<ProductModel[], string>({ cmd: ProductsCommandPatternConstants.SEARCH_BY_NAME }, productName)
    }

    callProductsServiceToFetchAllProducts() {
        // return this.productsServiceClient.emit({ cmd: ProductsCommandPatternConstants.GET_ALL }, {})
        return this.productsServiceClient.send<ProductModel[]>({ cmd: ProductsCommandPatternConstants.GET_ALL }, {})
    }
}