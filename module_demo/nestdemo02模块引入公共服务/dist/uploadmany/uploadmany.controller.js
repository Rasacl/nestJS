"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadmanyController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
const path_1 = require("path");
let UploadmanyController = class UploadmanyController {
    index() {
    }
    doAdd(body, files) {
        console.log(body);
        console.log(files);
        for (const file of files) {
            const writeImage = fs_1.createWriteStream(path_1.join(__dirname, '../../', 'public/upload', `${Date.now()}-${file.originalname}`));
            writeImage.write(file.buffer);
        }
        return '上传图片成功';
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('default/uploadmany'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UploadmanyController.prototype, "index", null);
__decorate([
    common_1.Post('doAdd'),
    common_1.UseInterceptors(platform_express_1.AnyFilesInterceptor()),
    __param(0, common_1.Body()), __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UploadmanyController.prototype, "doAdd", null);
UploadmanyController = __decorate([
    common_1.Controller('uploadmany')
], UploadmanyController);
exports.UploadmanyController = UploadmanyController;
//# sourceMappingURL=uploadmany.controller.js.map