"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q = exports.client = void 0;
var faunadb = require("faunadb");
exports.client = new faunadb.Client({
    secret: process.env.FAUNA_KEY,
    domain: process.env.FAUNA_DOMAIN,
    port: 443,
    scheme: "https",
});
exports.q = faunadb.query;
//# sourceMappingURL=faunadb-helper.js.map