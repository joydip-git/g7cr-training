import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { ProductsSettingConstants } from "src/infrastructure/products/constants/products-settings";
import { ProductsApiGatewayController } from "./products/products-api-gateway.controller";
import { ProductsApiGatewayService } from "./products/products-api-gateway.service";

@Module({
    imports: [ClientsModule.register([{
        name: ProductsSettingConstants.PRODUCTS_CLIENT_PROXY,
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://vtdorrdk:aEWpiea-h9Mt9aO5DYeiPAkrvlO_Cg9l@cattle.rmq2.cloudamqp.com/vtdorrdk'],
            queue: 'products_queue',
            queueOptions: {
                durable: false
            },
        },
    }])],
    controllers: [ProductsApiGatewayController],
    providers: [ProductsApiGatewayService]
})
export class AppApiGatewayModule {
    constructor(){
        console.log('api gateway module created')
    }

}