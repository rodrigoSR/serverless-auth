"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = void 0;
var data_1 = require("../data");
var usecases_1 = require("../domain/usecases");
exports.TYPES = {
    AddUser: usecases_1.ADDUSER_TYPE,
    AddUserRepository: data_1.ADDUSERREPOSITORY_TYPE,
    CheckUserByEmailRepository: data_1.CHECKUSERBYEMAILREPOSITORY_TYPE,
    Hasher: data_1.HASHER_TYPE,
    CheckPassowrd: data_1.CHECKPASSWORD_TYPE,
    FindUserByEmailRepository: data_1.FINDUSERBYEMAILREPOSITORY_TYPE,
    Login: usecases_1.LOGIN_TYPE,
    Encrypter: data_1.ENCRYPTER_TYPE,
    Decrypter: data_1.DECRYPTER_TYPE,
};
//# sourceMappingURL=types.js.map