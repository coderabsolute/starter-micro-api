const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hellow world from pdf 🎉 at ${new Date()}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
