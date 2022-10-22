import { NewsService } from '../../service/news/news.service';
import { AppService } from '../../../../app.service';
export declare class NewsController {
    private newsService;
    private appService;
    constructor(newsService: NewsService, appService: AppService);
    index(): string;
}
