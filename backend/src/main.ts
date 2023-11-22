import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'OPTIONS'],
  });
  await app.listen(3300, () => console.log('Server is running'));
}
bootstrap();
