import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { AccessInterface } from '../../interface/access.interface'

@Injectable()
export class AccessService {
    constructor(@InjectModel('Access') private readonly accessModel) { }
    
    //查找
    async find(json: AccessInterface = {}, fields?: String) {
        try {
            
        return await this.accessModel.find(json,fields)
        } catch (error) {
            return null
        }
    }
    //增加
    async add(json: AccessInterface) {
        try {
            
            let access = new this.accessModel(json)
            let result = access.save()
            return result
        } catch (error) {
            return null
        }
    }
    //更新
    async update(json1: AccessInterface, json2: AccessInterface) {
        
       try {
           let result = await this.accessModel.updateOne(json1, json2)
           return result
       } catch (error) {
           return null
       }
    }
    //删除
    async delete(json: AccessInterface) {
        try {
            let result = await this.accessModel.deleteOne(json)
            return result
        } catch (error) {
            return null
        }
    }

    getModel() {
        return this.accessModel
    }
}
