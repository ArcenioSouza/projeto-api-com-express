import express from 'express'
import * as bancoDeDados from './bancoDeDados.js'
import bodyParser from 'body-parser';

const porta = 3000;
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
   res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
   res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
   const produto = bancoDeDados.salvarProduto({
      nome: req.body.nome,
      preco: req.body.preco
   })
   res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
   const produto = bancoDeDados.salvarProduto({
      nome: req.body.nome,
      preco: req.body.preco
   })
   res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
   const produto = bancoDeDados.excluirProduto(req.params.id)
   res.send(produto)
})

app.listen(porta, () => {
   console.log(`Servidor está executando na porta ${porta}`)
})
