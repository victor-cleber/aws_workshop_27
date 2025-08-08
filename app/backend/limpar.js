const pool = require('./db');

(async () => {
  try {
    await pool.query('DELETE FROM produtos');
    console.log('Todos os produtos foram removidos com sucesso!');
  } catch (err) {
    console.error('Erro ao apagar produtos:', err);
  } finally {
    pool.end();
  }
})();

