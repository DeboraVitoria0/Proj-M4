import express from 'express';
const router = express.Router();

// Mock database
const users = [
  {
    Book_Title: 'O Reizinho Autista: Guia para lidar com comportamentos difíceis',
    Author: 'Gustavo Teixeira e Mayra Gaiato',
  },
  {
    Book_Title: 'Espectro Autista Feminino: Invisibilidade, Diagnóstico e Perspectivas',
    Author: 'Lygia Pereira',
  },
  {
    Book_Title: 'Cérebro Singular: Como estimular crianças no espectro autista ou com atrasos no desenvolvimento',
    Author: 'Mayra Gaiato',
    },
  {
    Book_Title: 'Análise do Comportamento Aplicada ao Transtorno do Espectro Autista',
    Author: 'Ana Carolina Sella (Compilador), Daniela Mendonça Ribeiro (Compilador)',
  },
  {
    Book_Title: 'O cérebro autista: Pensando através do espectro',
    Author: 'Temple Grandin (Autor), Richard Panek (Autor), Cristina Cavalcanti (Tradutor)',
  },
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

export default router