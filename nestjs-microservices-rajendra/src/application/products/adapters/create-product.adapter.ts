import { Inject, Injectable } from "@nestjs/common";
import { ProductModel } from "src/domain/products/models/product.model";
import { IProductsService } from "src/domain/products/ports/products.service";
import { IProductAdapter } from "src/infrastructure/products/adapter-contract/product.adapter";
import { ProductsSettingConstants } from "src/infrastructure/products/constants/products-settings";
import CreateProductCommand from "../commands/create-product.command";

@Injectable()
export default class CreateProductAdapter implements IProductAdapter<CreateProductCommand, ProductModel> {
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_SERVICE) private productsService: IProductsService) {
        console.log('CreateProductAdapter created')
    }
    async handle(product: CreateProductCommand): Promise<ProductModel> {
        return (await this.productsService.addProduct({ ...product })).get()
    }
}
