import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';//api 文档
import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-blog-api', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  const app = await NestFactory.create(AppModule);

    // 添加全局验证器 （格式转换 必填等）
  app.useGlobalPipes(new ValidationPipe());

  // 文档初始化
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(5001);
}
bootstrap();
