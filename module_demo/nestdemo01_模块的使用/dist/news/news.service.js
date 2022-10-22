"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
let NewsService = class NewsService {
    findAll() {
        return [
            { "title": "新闻111" },
            { "title": "新闻2222" },
            { "title": "新闻3333" },
            { "title": "新闻111" },
            { "title": "新闻2222" },
            { "title": "新闻3333" }
        ];
    }
};
NewsService = __decorate([
    common_1.Injectable()
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map