
import { Injectable } from '@nestjs/common';

//引入验证码库
import * as svgCaptcha from 'svg-captcha';

//md5加密
import * as md5 from 'md5';
import { createWriteStream } from 'fs'
import { join,extname } from 'path'
import { Config } from '../../config/config'
import * as mkdirp from 'mkdirp'
//格式化日期
import {format} from 'silly-datetime'

@Injectable()
export class ToolsService {
    getCaptcha() {
        var captcha = svgCaptcha.create({
            size: 2,
            fontSize: 50,
            width: 100,
            height: 34,
            background: "#cc9966"
        });
        return captcha;
    }
    getMd5(str:string){
        return md5(str);
    }

    async success(res,redirectUrl){
        await res.render('admin/public/success',{                          
            redirectUrl:redirectUrl
        })
    }
    async error(res, message, redirectUrl) {
        await res.render('admin/public/error', {
            message: message,
            redirectUrl: redirectUrl
        })
    }
    getTime() {
        let d = new Date()
        return d.getTime()
   }

    uploadFile(file) {
    /**
     *1 获取当前日期 20200201
      2 根据日期创建目录
      3 实现上传
      4 返回图片保存的地址
     */
        
        let day = format(new Date(), 'YYMMDD')  //目录名称
        let d = this.getTime()  //时间戳 当前图片名称
        let dir = join(__dirname, `../../../public/${Config.uploadDir}`, day)
        mkdirp.sync(dir)  //创建目录
        let uploadDir = join(dir,d+extname(file.originalname))
        const writeImage = createWriteStream(uploadDir)
        writeImage.write(file.buffer)

        let saveDir = join(`${Config.uploadDir}`, day, d + extname(file.originalname))
        
        return saveDir

     }

}
