import { Module } from '@nestjs/common';
import { NewsController } from './controller/news/news.controller';

import { AppService } from '../../app.service';

//引入其他模块
import { ShareModule } from '../share/share.module';

@Module({
  imports:[ShareModule],
  controllers: [NewsController],
  providers:[AppService]
})
export class DefaultModule {}
