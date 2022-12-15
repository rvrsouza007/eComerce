import { Router } from "express";
import {insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto} from "./controller/Produto.js";
import {insertUsuario, updateUsuario, selectUsuarios, selectUsuario, deleteUsuario} from "./controller/Usuario.js";
import {createTable, insertCarrinho, updateCarrinho, selectCarrinhos, selectCarrinho, deleteCarrinho} from "./controller/Carrinho.js";

const router = Router();
createTable();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/produtos', selectProdutos);
router.get('/produto', selectProduto);
router.post('/produto', insertProduto);
router.put('/produto', updateProduto);
router.delete('/produto', deleteProduto);

router.get('/usuarios', selectUsuarios);
router.get('/usuario', selectUsuario);
router.post('/usuario', insertUsuario);
router.put('/usuario', updateUsuario);
router.delete('/usuario', deleteUsuario);

router.get('/carrinhos', selectCarrinhos);
router.get('/carrinho', selectCarrinho);
router.post('/carrinho', insertCarrinho);
router.put('/carrinho', updateCarrinho);
router.delete('/carrinho', deleteCarrinho);

export default router;