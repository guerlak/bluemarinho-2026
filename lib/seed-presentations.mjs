import pg from 'pg';
import * as dotenv from 'dotenv';

// Carrega as variáveis do .env.local
dotenv.config({ path: '.env.local' });

const { Pool } = pg;

if (!process.env.POSTGRES_URL) {
  console.error('❌ Erro: POSTGRES_URL não encontrada no .env.local');
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: { rejectUnauthorized: false },
});

// Shows iniciais da banda
const PRESENTATIONS_TO_SEED = [
  { day: "11", month: "JUL", year: "2026", venue: "BROOKS PUB", time: "21:00" },
  { day: "25", month: "JUL", year: "2026", venue: "TRIP DO VINHO", time: "21:00" },
  { day: "01", month: "AGO", year: "2026", venue: "BULLDOG ROCK BAR", time: "21:00" },
  { day: "29", month: "AGO", year: "2026", venue: "TRIP DO VINHO", time: "21:00" },
  { day: "19", month: "SET", year: "2026", venue: "BAR DO GOLFE", time: "19:30" },
  { day: "10", month: "OUT", year: "2026", venue: "TRIP DO VINHO", time: "21:00" },
  { day: "17", month: "OUT", year: "2026", venue: "ZIEGE ZAG", time: "17:00" },
  { day: "03", month: "OUT", year: "2026", venue: "MACACO CAOLHO", time: "21:30" },
];

async function seed() {
  console.log('🌱 Iniciando seed de apresentações no PostgreSQL...');

  try {
    let insertedCount = 0;

    for (const p of PRESENTATIONS_TO_SEED) {
      // 1. Busca o ID da casa de show pelo nome
      const venueRes = await pool.query('SELECT id FROM venues WHERE name = $1', [p.venue]);

      if (venueRes.rows.length === 0) {
        console.warn(`⚠️ Casa "${p.venue}" não encontrada na tabela venues. Pulando show.`);
        continue;
      }

      const venueId = venueRes.rows[0].id;

      // 2. Insere a apresentação vinculada à casa
      await pool.query(
        `INSERT INTO presentations (venue_id, day, month, year, time)
         VALUES ($1, $2, $3, $4, $5)`,
        [venueId, p.day, p.month, p.year, p.time]
      );

      insertedCount++;
    }

    console.log(`✅ Sucesso! ${insertedCount} apresentações foram inseridas com IDs próprios no banco.`);
  } catch (error) {
    console.error('❌ Erro durante o seed:', error);
  } finally {
    await pool.end();
  }
}

seed();
