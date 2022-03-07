"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diContainer = void 0;
var inversify_1 = require("inversify");
var usecases_1 = require("../data/usecases");
var db_1 = require("../infra/adapters/db");
var cryptography_1 = require("../infra/adapters/cryptography");
var types_1 = require("./types");
var container = new inversify_1.Container();
// repositories
container.bind(types_1.TYPES.AddUserRepository).to(db_1.FaunaUserAdapter);
container
    .bind(types_1.TYPES.CheckUserByEmailRepository)
    .to(db_1.FaunaUserAdapter);
container
    .bind(types_1.TYPES.FindUserByEmailRepository)
    .to(db_1.FaunaUserAdapter);
// cryptography
container.bind(types_1.TYPES.Hasher).to(cryptography_1.BcryptAdapter);
container.bind(types_1.TYPES.CheckPassowrd).to(cryptography_1.BcryptAdapter);
container.bind(types_1.TYPES.Encrypter).to(cryptography_1.JwtAdapter);
container.bind(types_1.TYPES.Decrypter).to(cryptography_1.JwtAdapter);
// usecases
container.bind(types_1.TYPES.AddUser).to(usecases_1.DbAddUser);
container.bind(types_1.TYPES.Login).to(usecases_1.DbLogin);
exports.diContainer = container;
//# sourceMappingURL=inversify-config.js.map