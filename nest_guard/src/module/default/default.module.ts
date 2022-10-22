import { Module } from '@nestjs/common';
import { NewsController } from './controller/news/news.controller';

@Module({
  controllers: [NewsController]
})
export class DefaultModule {}
