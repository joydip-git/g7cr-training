import { Optional } from "typescript-optional";
import { ProductModel } from "../models/product.model";

export interface IProductsService {
    fetchProductById(productId: number): Promise<Optional<ProductModel>>;
    fetchProductsByName(productName: string): Promise<ProductModel[]>;
    fetchProducts(): Promise<ProductModel[]>;
    addProduct(product: ProductModel): Promise<Optional<ProductModel>>;
    modifyProduct(productId: number, product: Partial<ProductModel>): Promise<Optional<ProductModel>>;
    deleteProduct(productId: number): Promise<Optional<ProductModel>>;
}