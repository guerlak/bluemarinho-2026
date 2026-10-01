import pg from 'pg';
import bcrypt from 'bcryptjs';
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

async function main() {
  console.log('⏳ Conectando ao Postgres...');

  try {
    // 1. Tabela de Usuários Admin
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(150) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "users" pronta.');

    // 2. NOVA: Tabela de Casas de Show (venues)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS venues (
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) UNIQUE NOT NULL,
        location VARCHAR(150) NOT NULL,
        "socialLink" VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "venues" pronta.');

    // 3. Tabela de Apresentações com Relacionamento (Foreign Key)
// 3. Tabela de Apresentações Limpa e Relacional
    // Remove a tabela antiga para recriar sem as colunas antigas obsoletas
    await pool.query(`DROP TABLE IF EXISTS presentations CASCADE;`);
    await pool.query(`
      CREATE TABLE presentations (
        id SERIAL PRIMARY KEY,
        venue_id INTEGER NOT NULL REFERENCES venues(id) ON DELETE CASCADE,
        day VARCHAR(10) NOT NULL,
        month VARCHAR(10) NOT NULL,
        year VARCHAR(10) NOT NULL,
        time VARCHAR(20) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela "presentations" recriada com estrutura relacional correta.');

    // Garante que a coluna venue_id existe caso a tabela já tenha sido criada anteriormente
    await pool.query(`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns 
          WHERE table_name='presentations' AND column_name='venue_id'
        ) THEN 
          ALTER TABLE presentations ADD COLUMN venue_id INTEGER REFERENCES venues(id) ON DELETE CASCADE;
        END IF; 
      END $$;
    `);
    console.log('✅ Tabela "presentations" atualizada com relacionamento (venue_id).');

    // 4. Inserir as casas frequentes iniciais na tabela venues
    const initialVenues = [
      { name: 'BROOKS PUB', location: 'Méier, RJ', socialLink: 'https://www.instagram.com/brookspubrj' },
      { name: 'TRIP DO VINHO', location: 'Vargem Grande, RJ', socialLink: 'https://www.instagram.com/tripdovinho' },
      { name: 'BULLDOG ROCK BAR', location: 'Pechincha, RJ', socialLink: 'https://www.instagram.com/bulldogrockbar' },
      { name: 'BAR DO GOLFE', location: 'Barra da Tijuca, RJ', socialLink: 'https://www.instagram.com/bardogolfe' },
      { name: 'ZIEGE ZAG', location: 'Vargem Pequena, RJ', socialLink: 'https://www.instagram.com/ziegezag' },
      { name: 'MACACO CAOLHO', location: 'Botafogo, RJ', socialLink: 'https://www.instagram.com/macacocaolhopub' },
    ];

    for (const v of initialVenues) {
      await pool.query(
        `INSERT INTO venues (name, location, "socialLink")
         VALUES ($1, $2, $3)
         ON CONFLICT (name) DO NOTHING`,
        [v.name, v.location, v.socialLink]
      );
    }
    console.log('✅ Casas iniciais inseridas na tabela "venues".');

    // 5. Cadastrar o Usuário Administrador (se ainda não existir)
  const adminEmail = process.env.ADMIN_EMAIL;
    const adminPasswordPlain = process.env.ADMIN_PASSWORD;
    if (!adminEmail || !adminPasswordPlain) {
      console.log('ℹ️ ADMIN_EMAIL ou ADMIN_PASSWORD não definidos no .env.local. Pulando criação de admin.');
    } else {
      // 1. Remove qualquer admin anterior para garantir a substituição
      await pool.query('DELETE FROM users');
      // 2. Gera o novo hash da nova senha
      const passwordHash = await bcrypt.hash(adminPasswordPlain, 10);
      // 3. Insere o novo admin
      await pool.query(
        'INSERT INTO users (email, password_hash) VALUES ($1, $2)',
        [adminEmail.toLowerCase().trim(), passwordHash]
      );
      console.log(`✅ Usuário administrador sobrescrito com sucesso!`);
      console.log(`   📧 Email: ${adminEmail}`);
      console.log(`   🔑 Senha atualizada conforme .env.local`);
    }

    console.log('\n🎉 Banco relacional configurado com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante a configuração:', error);
  } finally {
    await pool.end();
  }
}


main();
