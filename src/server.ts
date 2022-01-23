import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config(); //para usar o .env que está na raiz do projeto preciso rodar esse config

const server = express(); //instanciando o servidor usando express

server.set('view engine', 'mustache'); //definindo o engine das views
server.set('views', path.join(__dirname, 'views')); //definindo qual pasta ficam as views
server.engine('mustache', mustache()); //rodando a engine com mustache

server.use(express.static(path.join(__dirname, '../public'))); //criando pasta pública para ler css, imagens, etc

// Rotas
server.use(mainRoutes); //importando as rotas do arquivo index.js
server.use((req, res) => {
    res.send('Página não encontrada!'); //Rota 404
});

server.listen(process.env.PORT); //colocando o servidor pra rodar na porta que eu defini no arquivo .env