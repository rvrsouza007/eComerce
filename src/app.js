// import {openDb} from './configDB.js'
// import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa} from "./controller/Pessoa.js";

import express from "express";
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

import router from "./router.js";
app.use(router);

app.listen(3000, () => console.log("Api rodando."));

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'),
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, ()=> console.log("rodando em https"))