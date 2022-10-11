import { Controller, Get } from '@nestjs/common';

@Controller('article')  //作为一级路由
export class ArticleController {

    @Get()
    index(): string{
        return '这是一个文章页面'
    }

    @Get('add')
    addArticle(): string{
        return '增加新闻'
    }
}
