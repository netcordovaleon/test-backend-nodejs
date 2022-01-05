import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import HttpExceptionFilter from './infraestructure/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.foorRoot({}));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
