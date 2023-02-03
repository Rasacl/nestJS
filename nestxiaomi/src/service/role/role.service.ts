import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {RoleInterface} from '../../interface/role.interface'
@Injectable()
export class RoleService {
    constructor(@InjectModel('Role') private roleModel) { }
    //查找
    async find(json: RoleInterface = {}, fields?: String) {
        try {
            
        return await this.roleModel.find(json,fields)
        } catch (error) {
            return null
        }
    }
    //增加
    async add(json: RoleInterface) {
        try {
            
            let role = new this.roleModel(json)
            let result = role.save()
            return result
        } catch (error) {
            return null
        }
    }
    //更新
    async update(json1: RoleInterface, json2: RoleInterface) {
        
       try {
           let result = await this.roleModel.updateOne(json1, json2)
           return result
       } catch (error) {
           return null
       }
    }
    //删除
    async delete(json: RoleInterface) {
        try {
            let result = await this.roleModel.deleteOne(json)
            return result
        } catch (error) {
            return null
        }
    }

    getModel() {
        return this.roleModel
    }

}
