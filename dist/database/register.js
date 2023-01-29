"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const pool = new pg_1.default.Pool({
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    port: process.env.port,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
});
exports.default = pool;
//# sourceMappingURL=register.js.map