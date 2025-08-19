import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {

    const { rows } = await sql`SELECT nome FROM paciente`;
  

    return res.status(200).json(rows);
  } catch (err) {
    console.error('DB error:', err);
    return res.status(500).json({ error: 'Falha ao buscar usuários' });
  }
}
