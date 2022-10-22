import { Module } from '@nestjs/common';
import { NewsController } from './controller/news/news.controller';

import { AppService } from '../../app.service';

@Module({
  controllers: [NewsController],
  providers:[AppService]
})
export class DefaultModule {}
