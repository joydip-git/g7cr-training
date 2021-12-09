import { Inject, Injectable } from "@nestjs/common";
import { ProductModel } from "src/domain/products/models/product.model";
import { IProductsService } from "src/domain/products/ports/products.service";
import { IProductAdapter } from "src/infrastructure/products/adapter-contract/product.adapter";
import { ProductsSettingConstants } from "src/infrastructure/products/constants/products-settings";
import { Optional } from "typescript-optional";
import UpdateProductCommand from "../commands/update-product.command";

@Injectable()
export default class UpdateProductAdapter implements IProductAdapter<UpdateProductCommand, ProductModel> {
    constructor(@Inject(ProductsSettingConstants.PRODUCTS_SERVICE) private productsService: IProductsService) {

    }
    async handle(product: UpdateProductCommand): Promise<ProductModel> {
        return (await this.productsService.modifyProduct(product.productId, { ...product })).get()
    }

}