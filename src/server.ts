import express from "express";

const app = express()

/**
GET => Buscar informações
POST => Inserir(criar) dados/informações 
PUT => Alterar uma informação 
DELETE => Remover um dado
PATCH => ALterar uma informação específica
*/

app.get('/test', (request, response) => {
  //Request => Entrando dados
  // Response => Saindo dados
  return response.send("Ola com o método GET")
})
app.post('/test-post', (request, response) => {
  return response.send("Ola com o método POST")
})

app.listen(3000, () => console.log("server is running"))