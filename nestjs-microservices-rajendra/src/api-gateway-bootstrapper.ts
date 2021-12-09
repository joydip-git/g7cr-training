import { ConfigService } from './infrastructure/configuration/config.service';
import { NestFactory } from '@nestjs/core';
import { AppApiGatewayModule } from './gateway/app-api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppApiGatewayModule);
    // if (!ConfigService.isProduction()) {

    //     const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    //         .setTitle('Products API')
    //         .setDescription('Products Services API')
    //         .build());

    //     SwaggerModule.setup('docs', app, document);

    // }
    app.enableCors()
    await app.listen(ConfigService.create().getPort())
}
bootstrap();
