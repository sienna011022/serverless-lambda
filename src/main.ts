import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  return app;
}
// 로컬 개발환경 경우만 실행
if (process.env.NODE_ENV === 'development') {
  bootstrap();
}
