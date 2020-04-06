const { Router } = require('express')

const routes = express.Router()

//Query Params: req.query (Filtros, ordenação e paginação)
//Route Params: req.params(Identificar um recusro na alteração e remoção)
//Body: req.body (dados para criação ou alteração de um registro)

routes.post('/devs', (req, res) => {
  console.log(req.body)
  return res.json({ menssagem: 'Hello Kaio Oministack10!' })
})

module.exports = routes