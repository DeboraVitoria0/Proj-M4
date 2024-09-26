import express from 'express';
import booksRoutes from './routes/books.js';
const app = express();
const PORT = 5000;

// Middleware para parsear JSON
app.use(express.json());

// Usar as rotas de usuários
app.use('/books', booksRoutes);

// Rota principal
app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'));

// Iniciar o servidor
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
