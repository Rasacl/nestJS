import { NestMiddleware } from '@nestjs/common';
export declare class NewsMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
