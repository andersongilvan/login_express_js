import express from 'express'
import conectaNaDatabase from './database/index.js'
import bodyParser from 'body-parser'
import router from './controllers/authController.js'


const conexao = await conectaNaDatabase()


conexao.on("error", (erro) => {
    console.error(`Erro de conexão ${erro}`)
})
conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})


const app = express()
app.use(bodyParser.json())
app.use(router)





app.listen(8081, () => {
    console.log('Servidor rodando')
}) 