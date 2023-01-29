import { faker } from '@faker-js/faker';
import fs from 'fs/promises';

export interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
  inStock: number;
  fastDelivery: boolean;
}

const generateProductService = async (path: string) => {
  const allProducts: Product[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
  }));
  try {
    console.log(__dirname, 'dir');
    const res = await fs.writeFile(path, JSON.stringify({ allProducts }));
    console.log('res', res);
  } catch (err) {
    console.log(err);
  }
};

export default generateProductService;
