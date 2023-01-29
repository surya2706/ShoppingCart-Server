import pool from '../database/register';

const getProducts = async (req, res) => {
  try {
    console.log('Fetching Products');
    const result = await pool.query('SELECT * FROM public.products');
    res.status(200).json({ allProducts: result.rows });
  } catch (e) {
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

export default getProducts;
