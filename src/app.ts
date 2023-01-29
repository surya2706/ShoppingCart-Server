import express from 'express';

import generateProductService from './services/generateProducts';
import getProducts from './services/getProducts';
import { join } from 'path';
import fs from 'fs';
import util from 'util';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const readFile = util.promisify(fs.readFile);

app.get('/products', getProducts);

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
  generateProductService(join(__dirname, '/json/product.json'));
  res.send('file generated');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
