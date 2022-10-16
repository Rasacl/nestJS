import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadController } from './upload/upload.controller';
import { UploadmanyController } from './uploadmany/uploadmany.controller';


@Module({
  imports: [],
  controllers: [AppController, UploadController, UploadmanyController],
  providers: [AppService],
})
export class AppModule {}
