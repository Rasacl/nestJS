"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const news_controller_1 = require("./controller/news/news.controller");
const user_controller_1 = require("./controller/user/user.controller");
const product_controller_1 = require("./controller/product/product.controller");
const init_middleware_1 = require("./middleware/init.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(init_middleware_1.InitMiddleware)
            .forRoutes({ path: 'user', method: common_1.RequestMethod.ALL }, { path: 'news', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [app_controller_1.AppController, news_controller_1.NewsController, user_controller_1.UserController, product_controller_1.ProductController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map