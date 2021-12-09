import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { IProductsService } from 'src/domain/products/ports/products.service'
import { ProductModel } from 'src/domain/products/models/product.model'
import { Optional } from 'typescript-optional'
import { Product } from '../entities/product.entity'
import { ProductMapper } from '../../../../infrastructure/products/mapper/product.mapper'

@Injectable()
export class ProductsRepository implements IProductsService {

    constructor(@InjectRepository(Product) private productsRepository: Repository<Product>) {
        console.log('products repository created')
    }

    async fetchProductsByName(productName: string): Promise<ProductModel[]> {
        return ProductMapper.toDomains(await this.productsRepository.find({ productName: productName }))
    }

    async addProduct(product: ProductModel): Promise<Optional<ProductModel>> {
        const added = await this.productsRepository.save({
            price: product.price,
            releaseDate: product.releaseDate,
            description: product.description,
            productName: product.productName,
            imageUrl: product.imageUrl,
        })
        return ProductMapper.toDomain(added)
    }
    async fetchProductById(productId: number): Promise<Optional<ProductModel>> {
        return ProductMapper.toDomain(await this.productsRepository.findOne({ productId: productId }))
    }
    async fetchProducts(): Promise<ProductModel[]> {
        // const data = await this.productsRepository
        //     .createQueryBuilder("products")
        //     .orderBy("products.productid")
        //     .getMany()
        const data = await this.productsRepository.find({
            order: {
                productName: "ASC"
            }
        })
        // console.log(data ? data : { 'm': 'nothing' })
        return ProductMapper.toDomains(data)
    }
    async modifyProduct(productId: number, product: Partial<ProductModel>): Promise<Optional<ProductModel>> {
        const found = await this.productsRepository.findOne({ productId: productId })
        if (found) {
            const updatedProduct = {
                ...found,
                ...product
            }
            return ProductMapper.toDomain(await this.productsRepository.save(updatedProduct))

        } else {
            return ProductMapper.toDomain(found)
        }
    }
    async deleteProduct(productId: number): Promise<Optional<ProductModel>> {
        const deleted = await this.productsRepository.findOne({ productId: productId });
        return ProductMapper.toDomain(await this.productsRepository.remove(deleted));
    }
}