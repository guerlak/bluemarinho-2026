import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Helper to query the DB
export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;