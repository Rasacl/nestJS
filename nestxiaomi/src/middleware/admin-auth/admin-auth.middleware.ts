import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AdminAuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    let pathName = req.baseUrl
    // 获取session里面保存的用户信息
    let userInfo = req.session.userInfo
    if (userInfo && userInfo.userName) {
      next();
    } else {
      //排除不需要做权限判断的页面
      if (pathName === '/admin/login' || pathName === '/admin/login/code' || pathName === '/admin/login/doLogion') {
        next()
      } else {
         res.redirect('/admin/login')
      }
    }
  }
}
