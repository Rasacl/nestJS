/*
 * @Author: chenxiao chenxiao@uino.com
 * @Date: 2023-01-30 16:57:06
 * @LastEditors: chenxiao chenxiao@uino.com
 * @LastEditTime: 2023-01-30 17:13:03
 * @FilePath: \nestJS\nestxiaomi\src\extend\helper.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
expot lass Helper{


    static title="我是全局的title";

    static substring(str:string,start:number,end:number){

            if(end){
                return str.substring(start,end);
            }else{
                return str.substring(start);
            }
    }

}