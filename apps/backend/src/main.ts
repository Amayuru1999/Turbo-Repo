import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  // Enable CORS for any origin
  app.enableCors({
    origin: '*', // Allows requests from any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
    credentials: true, // Allows credentials (cookies, authorization headers, etc.) to be included in the requests
  });

  await app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log('🚀 Server is running on http://localhost:3002');
  });
}
bootstrap();