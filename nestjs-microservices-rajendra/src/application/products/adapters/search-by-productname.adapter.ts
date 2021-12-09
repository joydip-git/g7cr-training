import { Inject, Injectable } from "@nestjs/common";
import { ProductModel } from "src/domain/products/models/product.model";
import { IProductsService } from "src/domain/products/ports/products.service";
import { IProductAdapter } from "src/infrastructure/products/adapter-contract/product.adapter";
import { ProductsSettingConstants } from "src/infrastructure/products/constants/products-settings";
import { Optional } from "typescript-optional";

@Injectable()
export class SearchByProductNameAdapter implements IProductAdapter<string, ProductModel>{
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_SERVICE) private productsService: IProductsService) {

    }
    handle(productName: string): Promise<ProductModel[]> {
        return this.productsService.fetchProductsByName(productName)
    }
}