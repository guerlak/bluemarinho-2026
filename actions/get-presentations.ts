'use server';

import { query } from '@/lib/db';
import { PRESENTATIONS as FALLBACK_PRESENTATIONS } from '@/lib/constants';
import { Presentation } from '../lib/types';

export async function getPresentations(): Promise<Presentation[]> {
  try {
    // Check if DB is configured
    if (!process.env.POSTGRES_URL) {
      console.warn('POSTGRES_URL not set, using fallback data');
      return FALLBACK_PRESENTATIONS;
    }

    const { rows } = await query('SELECT * FROM presentations ORDER BY id ASC');

    if (rows.length === 0) {
      return FALLBACK_PRESENTATIONS;
    }

    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    // Fallback to static data if DB fails (prevents site crash during dev)
    return FALLBACK_PRESENTATIONS;
  }
}