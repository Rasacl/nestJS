# 创建项目 删除无用文件
nest new 项目名  删除 app.service.ts  app.controller.ts  app.controller.spec.ts 

# 项目架构
config  配置文件
extend  扩展文件（比如模板引擎的应用）
interface 接口文件（用于ts的数据验证）
middleware 中间件文件
module 模块
schema  数据库模块
service 服务模块

# 配置静态 web 目录、模板引擎、Cookie、Session

npm i cookie-parser express-session ejs --save

配置main.ts