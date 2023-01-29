"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generateProducts_1 = __importDefault(require("./services/generateProducts"));
const getProducts_1 = __importDefault(require("./services/getProducts"));
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const readFile = util_1.default.promisify(fs_1.default.readFile);
app.get('/products', getProducts_1.default);
// app.get('/products', async (req, res) => {
//   try {
//     const data = await readFile(join(__dirname, '/json/product.json'), 'utf-8');
//     res.json(JSON.parse(data));
//   } catch (e) {
//     console.log(e);
//   }
// });
app.get('/generateProducts', (req, res) => {
    console.log('directory', __dirname);
    (0, generateProducts_1.default)((0, path_1.join)(__dirname, '/json/product.json'));
    res.send('file generated');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map