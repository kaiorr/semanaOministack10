const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({ menssagem: 'Hello Kaio Oministack10!' })
})

app.listen(3333)