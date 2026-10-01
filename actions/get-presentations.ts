'use server';

import { query } from '@/lib/db';

import { Presentation } from '../lib/types';

export async function getPresentations(): Promise<Presentation[]> {
  try {
    const { rows } = await query(`
      SELECT 
        p.id,
        p.venue_id,
        p.day,
        p.month,
        p.year,
        p.time,
        v.name AS venue,
        v.location AS location,
        v."socialLink" AS "socialLink"
      FROM presentations p
      INNER JOIN venues v ON p.venue_id = v.id
      ORDER BY p.id ASC
    `);

    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    return [];

  }
}
