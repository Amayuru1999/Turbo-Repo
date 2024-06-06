import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  // Enable CORS for specific origins
  app.enableCors({
    origin: 'https://turbo-repo-frontend.vercel.app', // Frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  });

  await app.listen(3002);
}
bootstrap();
