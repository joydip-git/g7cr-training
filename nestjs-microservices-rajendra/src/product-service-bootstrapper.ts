import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from './infrastructure/configuration/config.service';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './services/products/products.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  //creating microservice application using NestFactory here
  //configuring the same with transport option (RabbitMQ) for messaging service
  //RabbitMQ is the message broker here
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ProductsModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://vtdorrdk:aEWpiea-h9Mt9aO5DYeiPAkrvlO_Cg9l@cattle.rmq2.cloudamqp.com/vtdorrdk'],
      queue: 'products_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen()
}
bootstrap();
