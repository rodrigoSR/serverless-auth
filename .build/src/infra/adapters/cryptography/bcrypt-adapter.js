"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptAdapter = void 0;
var bcrypt = require("bcrypt");
var inversify_1 = require("inversify");
require("reflect-metadata");
var BcryptAdapter = /** @class */ (function () {
    function BcryptAdapter() {
    }
    BcryptAdapter.prototype.check = function (_a) {
        var password = _a.password, hash = _a.hash;
        return bcrypt.compare(password, hash);
    };
    BcryptAdapter.prototype.hash = function (text) {
        return bcrypt.hash(text, 10);
    };
    BcryptAdapter = __decorate([
        (0, inversify_1.injectable)()
    ], BcryptAdapter);
    return BcryptAdapter;
}());
exports.BcryptAdapter = BcryptAdapter;
//# sourceMappingURL=bcrypt-adapter.js.map