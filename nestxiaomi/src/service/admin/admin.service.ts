import { Injectable } from '@nestjs/common';
import { getModelToken, InjectModel } from '@nestjs/mongoose';
import {AdminInterface} from '../../interface/admin.interface'

@Injectable()
export class AdminService {
    constructor(@InjectModel('Admin') private readonly adminModel) {}

     //查找
     async find(json: AdminInterface = {}, fields?: String) {
        try {
            
        return await this.adminModel.find(json,fields)
        } catch (error) {
            return null
        }
    }
    //增加
    async add(json: AdminInterface) {
        try {
            
            let role = new this.adminModel(json)
            let result = role.save()
            return result
        } catch (error) {
            return null
        }
    }
    //更新
    async update(json1: AdminInterface, json2: AdminInterface) {
        
       try {
           let result = await this.adminModel.updateOne(json1, json2)
           return result
       } catch (error) {
           return null
       }
    }
    //删除
    async delete(json: AdminInterface) {
        try {
            let result = await this.adminModel.deleteOne(json)
            return result
        } catch (error) {
            return null
        }
    }

    getModel() {
        return this.adminModel
    }
}
