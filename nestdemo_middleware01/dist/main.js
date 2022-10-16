"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path.join(__dirname, '..', 'public'), {
        prefix: '/static/',
    });
    app.setBaseViewsDir('views');
    app.setViewEngine('ejs');
    app.use(cookieParser("this signed cookies"));
    app.use(session({
        secret: 'keyboard cat',
        cookie: { maxAge: 9000, httpOnly: true },
        rolling: true
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map