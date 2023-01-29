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
const faker_1 = require("@faker-js/faker");
const promises_1 = __importDefault(require("fs/promises"));
const generateProductService = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = [...Array(20)].map(() => ({
        id: faker_1.faker.datatype.uuid(),
        name: faker_1.faker.commerce.productName(),
        price: faker_1.faker.commerce.price(),
        rating: faker_1.faker.helpers.arrayElement([1, 2, 3, 4, 5]),
        image: faker_1.faker.image.image(),
        inStock: faker_1.faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker_1.faker.datatype.boolean(),
    }));
    try {
        console.log(__dirname, 'dir');
        const res = yield promises_1.default.writeFile(path, JSON.stringify({ allProducts }));
        console.log('res', res);
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = generateProductService;
//# sourceMappingURL=generateProducts.js.map