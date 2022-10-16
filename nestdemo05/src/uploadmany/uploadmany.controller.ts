import { Controller, Get, Render, Post, Body, UseInterceptors, UploadedFiles } from '@nestjs/common';

import { AnyFilesInterceptor } from '@nestjs/platform-express';

import {createWriteStream} from 'fs';

import {join} from 'path';


//文档：https://docs.nestjs.com/techniques/file-upload

@Controller('uploadmany')
export class UploadmanyController {
    @Get()
    @Render('default/uploadmany')
    index() {
    }
    @Post('doAdd')
    @UseInterceptors(AnyFilesInterceptor())
    doAdd(@Body() body, @UploadedFiles() files) {
        //如果要实现图片上传的话还需要进行一些判断
        console.log(body);
        console.log(files);
        for (const file of files)         
        { 
            const writeImage = createWriteStream(join(__dirname, '../../', 'public/upload', `${Date.now()}-${file.originalname}`)); 
            writeImage.write(file.buffer);         
        }
        return '上传图片成功';
    }
}
