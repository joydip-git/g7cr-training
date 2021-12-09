import { Inject, Injectable } from "@nestjs/common";
import { ProductModel } from "src/domain/products/models/product.model";
import { IProductsService } from "src/domain/products/ports/products.service";
import { IProductAdapter } from "src/infrastructure/products/adapter-contract/product.adapter";
import { ProductsSettingConstants } from "src/infrastructure/products/constants/products-settings";

@Injectable()
export default class FetchProductsAdapter implements IProductAdapter<number, ProductModel> {
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_SERVICE) private productsService: IProductsService) {

    }
    handle(): Promise<ProductModel[]> {
        return this.productsService.fetchProducts()
    }
}