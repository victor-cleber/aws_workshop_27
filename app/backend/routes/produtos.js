const express = require('express');
const multer = require('multer');
const pool = require('../db');
const path = require('path');
const router = express.Router();

// Configuração do multer (armazenamento local)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// GET /produtos
router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM produtos ORDER BY id');
  res.json(rows);
});

// POST /produtos
router.post('/', upload.single('imagem'), async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const imagem_url = req.file ? `/uploads/${req.file.filename}` : null;
  const result = await pool.query(
    'INSERT INTO produtos (nome, descricao, preco, imagem_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [nome, descricao, preco, imagem_url]
  );
  res.status(201).json(result.rows[0]);
});

// GET /produtos/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);
  if (result.rows.length === 0) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json(result.rows[0]);
});

module.exports = router;

