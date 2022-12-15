import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Carrinho (id INTEGER PRIMARY KEY , usuario_id INTEGIR FOREING KEY, produto_id INTEGER FOREING KEY, status VARCHAR(45))')
    })
}

export async function selectCarrinhos(req, res){
    openDb().then(db=>{
        db.all('SELECT  * FROM Carrinho')
        .then(Carrinhos=> res.json(Carrinhos))
    });
}

export async function selectCarrinho(req, res){
    let id = req.body.id
    openDb().then(db=>{
        db.get('SELECT  * FROM Carrinho WHERE id=?', [id])
        .then(Carrinho=> res.json(Carrinho))
    });
    res.json({
        "statusCode": 200
    })
}

export async function insertCarrinho(req, res){
    let carrinho = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Carrinho (nome, email, senha) VALUES (?, ?, ?)', [carrinho.nome, carrinho.email, carrinho.senha]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateCarrinho(req, res){
    let usuario = req.body;
    openDb().then(db=>{
        db.run('UPDATE Carrinho SET nome=?, email=?, senha=? WHERE id=?', [carrinho.nome, carrinho.email, carrinho.senha, carrinho.id]);
    });
    res.json({
        "statusCode": 200
    })
}


export async function deleteCarrinho(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Carrinho WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
}