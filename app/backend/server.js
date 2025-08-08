require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const produtosRouter = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔧 Criação automática da pasta uploads, se não existir
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('🗂️ Pasta "uploads/" criada automaticamente.');
}

// 🌐 CORS (permite frontend externo acessar)
app.use(cors()); // ou use: app.use(cors({ origin: 'http://SEU_IP:8080' }));

// 📦 Middleware para JSON e formulário
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// 🖼️ Servir imagens da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 📚 Rotas
app.use('/produtos', produtosRouter);

// 🚀 Inicializar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

