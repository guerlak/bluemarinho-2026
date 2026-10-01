import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: process.env.NODE_ENV === 'production' || process.env.POSTGRES_URL?.includes('neon.tech') 
    ? { rejectUnauthorized: false } 
    : false,
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;
