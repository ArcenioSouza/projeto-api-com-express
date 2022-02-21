import express from 'express'

const porta = 3003;
const app = express()

app.get('/produtos', (req, res, next) => {
   res.send({nome: 'Notebook', preco: 123.45})
})

app.listen(porta, () => {
   console.log(`Servidor está executando na porta ${porta}`)
})
