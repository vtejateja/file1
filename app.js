const express = require('express')
const app = express()
app.get('/gadgets', (request, response) => {
  reponse.sendFile('./gadgets.html', {root: __dirname})
})
module.exports = app
app.listen(3000)
