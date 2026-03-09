import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // If any extra key value pair in request body then it does not send the extra to the controller
      forbidNonWhitelisted: true // This throws an error if req body contain extra key value pair
    }
  ))
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
