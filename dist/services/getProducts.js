"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../database/register"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Fetching Products');
        const result = yield register_1.default.query('SELECT * FROM public.products');
        res.status(200).json({ allProducts: result.rows });
    }
    catch (e) {
        res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});
exports.default = getProducts;
//# sourceMappingURL=getProducts.js.map