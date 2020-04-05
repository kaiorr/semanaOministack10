const express = require('express')

const app = express()

app.use(express.json());

//Query Params: req.query (Filtros, ordenação e paginação)
//Route Params: req.params(Identificar um recusro na alteração e remoção)
//Body: req.body (dados para criação ou alteração de um registro)

app.get('/', (req, res) => {
  return res.json({ menssagem: 'Hello Kaio Oministack10!' })
})

app.listen(3333)