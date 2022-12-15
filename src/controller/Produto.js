import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Produto (id INTEGER PRIMARY KEY , titulo VARCHAR(45), descricao VARCHAR(450), valor FLOAT(6,2))')
    })
}

export async function selectProdutos(req, res){
    openDb().then(db=>{
        db.all('SELECT  * FROM Produto')
        .then(Produtos=> res.json(Produtos))
    });
}

export async function selectProduto(req, res){
    let id = req.body.id
    openDb().then(db=>{
        db.get('SELECT  * FROM Produto WHERE id=?', [id])
        .then(Produto=> res.json(Produto))
    });
    res.json({
        "statusCode": 200
    })
}

export async function insertProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Produto (titulo, descricao, valor) VALUES (?, ?, ?)', [produto.titulo, produto.descricao, produto.valor]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateProduto(req, res){
    let produto = req.body;
    openDb().then(db=>{
        db.run('UPDATE Produto SET titulo=?, descricao=?, valor=? WHERE id=?', [produto.titulo, produto.descricao, produto.valor, produto.id]);
    });
    res.json({
        "statusCode": 200
    })
}


export async function deleteProduto(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Produto WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}