/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2022-10-15 14:18:30
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2022-10-15 14:20:41
 * @FilePath: \nestJS\nestdome2\src\news\news.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    findAll() {
        return [
            {
                'title':'新闻1111'
            },
            {
                'title':'新闻222'
            },
            {
                'title':'新闻333'
            }
        ]
    }
}
