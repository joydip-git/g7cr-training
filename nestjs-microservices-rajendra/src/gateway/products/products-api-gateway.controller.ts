import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import CreateProductCommand from 'src/application/products/commands/create-product.command';
import UpdateProductCommand from 'src/application/products/commands/update-product.command';
import { ProductsApiGatewayService } from './products-api-gateway.service';

@Controller('/products')
export class ProductsApiGatewayController {
    constructor(private apiGatewayService: ProductsApiGatewayService) {
        console.log('api gateway controller created')
    }

    @Post('/add')
    createProductApi(@Body() product: CreateProductCommand) {
        return this.apiGatewayService.callProductsServiceToAddProduct(product)
    }


    @Patch('/update/:id')
    updateProductApi(@Body() product: UpdateProductCommand, @Param('id', ParseIntPipe) productId: number) {
        return this.apiGatewayService.callProductsServiceToUpdateProduct(productId, product)
    }

    @Delete('/delete/:id')
    deleteProductApi(@Param('id', ParseIntPipe) productId: number) {
        return this.apiGatewayService.callProductsServiceToDeleteProductById(productId)
    }

    @Get('/get/:id')
    getProductByIdApi(@Param('id', ParseIntPipe) productId: number) {
        return this.apiGatewayService.callProductsServiceToSearchProductById(productId)
    }

    @Get('/name/:name')
    getProductByNameApi(@Param('name') productName: string) {
        return this.apiGatewayService.callProductsServiceToSearchProductByName(productName)
    }
    @Get('/all')
    getProductsApi() {
        console.log('received request')
        return this.apiGatewayService.callProductsServiceToFetchAllProducts()
    }

}