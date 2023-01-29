import pg from 'pg';
import { config } from 'dotenv';

config();
const pool = new pg.Pool({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  port: process.env.port,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
});

export default pool;
