CREATE TABLE IF NOT EXISTS produtos (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  descricao TEXT,
  preco NUMERIC(10,2),
  imagem_url TEXT,
  criado_em TIMESTAMP DEFAULT NOW()
);

