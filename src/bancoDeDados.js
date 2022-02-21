const sequence = {
   _id: 1,
   get id() { return this._id++ }
}

const produtos = {}

export function salvarProduto(produto){
   if(!produto.id) {
      produto.id = sequence.id
   }
   
   produtos[produto.id] = produto
   
   return produtos
}

export function getProduto(id){
   return produtos[id] || {}
}

export function getProdutos(){
   return Object.values(produtos)
}

export function excluirProduto(id){
   const produto = produtos[id]
   delete produtos[id]
   return produto
}