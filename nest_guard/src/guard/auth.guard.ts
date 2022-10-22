import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
  
    //做权限判断
    // var n = Math.random();
    // console.log('守卫执行了'+n);
    // if (n > 0.5) {
    //   return true;
    // }

    // context.switchToHttp().getRequest().session 获取session
    //context.switchToHttp().getRequest().cookie 获取cookie

    var req=context.switchToHttp().getRequest();
    if(req.path=='/admin/login'){
      return true;
    }else{
      var userinfo=context.switchToHttp().getRequest().session.username;
      if(userinfo){
        return true;
      }
      return false;
    }

  }
}
