import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Route Manager')
    .setDescription('The Route Manager API description')
    .setVersion('1.0')
    .addTag('Route Manager')
    .setContact(
      'Route Manager - Repository',
      'https://github.com/Samuel-Ricardo/Routes_Manager-API',
      'samuelricardoofficial@gmail.com',
    )
    .setLicense(
      'MIT',
      'https://github.com/Samuel-Ricardo/Routes_Manager-API/blob/main/LICENSE',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
