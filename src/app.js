// import {openDb} from './configDB.js'
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from './controller/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', (req, res)=>{
    res.send("ola mundo");
})

app.get('/pessoas', async function(req, res){
    let pessoas = await selectPessoas();
    res.json(pessoas);
})

app.get('/pessoa', async function(req, res){
    let pessoa = await selectPessoa(req.body.id);
    res.json(pessoa);
})

app.post('/pessoa', (req, res)=>{
    insertPessoa(req.body);
    res.json({
        "statusCode": 200
    })
})

app.put('/pessoa', (req, res)=>{

    if(req.body && !req.body.id){
        res.json({
            "statusCode": "400",
            "msg":"vc precisa informar um id"
        })
    }else{
        updatePessoa(req.body);
        res.json({
            "statusCode": 200
        })
    }
});

app.delete('/pessoa', async function(req, res){
    let pessoa = await deletePessoa(req.body.id);
    res.json(pessoa);
})

app.listen(3000, ()=>console.log("Api rodando."));
