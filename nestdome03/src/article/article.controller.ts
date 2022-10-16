import { Controller, Get, Render, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {
    @Get()
    @Render('default/article')  //使用模板渲染可以使用return 否则使用res.send()
    index(@Response() res) {
        //设置cookie
        // res.cookie('username', '我是cookie', {
        //     maxAge: 1000 * 60 * 10, //设置过期时间
        //     httpOnly: true   //是否只有后端才能访问
        // })
        res.cookie('username', '我是cookie', {
            maxAge: 1000 * 60 * 10, //设置过期时间
            httpOnly: true,   //是否只有后端才能访问
            signed:true
        })
        return {'username':'aaaaa'}
        // res.send('这是文章页面')
    }
}
