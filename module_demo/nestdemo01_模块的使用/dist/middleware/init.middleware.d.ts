import { NestMiddleware } from '@nestjs/common';
export declare class InitMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
