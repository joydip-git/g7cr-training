import { ProductModel } from "src/domain/products/models/product.model";
import { Optional } from "typescript-optional";
import { Product } from "../../../core-domain/products/adapters/entities/product.entity";

export class ProductMapper {
    static toDomain(repoEntity: Product): Optional<ProductModel> {
        if (!repoEntity) {
            return Optional.empty<ProductModel>()
        }

        const productModel: ProductModel = new ProductModel(repoEntity.productName, repoEntity.description, repoEntity.releaseDate, repoEntity.price, repoEntity.imageUrl, repoEntity.likes, repoEntity.productId)

        return Optional.of(productModel)
    }
    static toDomains(repoEntities: Product[]): ProductModel[] {
        const productModels = new Array<ProductModel>()
        repoEntities.forEach(
            re => {
                const productModel = this.toDomain(re)
                productModels.push(productModel.get())
            }
        )
        return productModels
    }
}