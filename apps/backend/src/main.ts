import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  // Enable CORS
  app.enableCors({
    origin: '*', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true // Allows cookies and other credentials to be sent with requests
  });

  // Middleware for logging requests
  app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request Headers:`, req.headers);
    next();
  });

  await app.listen(3002);
}
bootstrap();
