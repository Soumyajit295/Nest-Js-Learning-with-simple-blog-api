import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // If any extra key value pair in request body then it does not send the extra to the controller
      //forbidNonWhitelisted: true // This throws an error if req body contain extra key value pair
    }
  ))

  // swagger configartion
  const config = new DocumentBuilder()
  .setTitle('Blog API')
  .setDescription('API Documentation')
  .setTermsOfService('http://localhost:3000/terms-of-service')
  .setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
