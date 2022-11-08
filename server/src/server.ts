import express from 'express'

const app = express()

// www.minhapi.com/ads

app.get('/ads', (req, res) => {
  return res.json([
    { id: 2, name: "Anúncio 2"},
    { id: 3, name: "Anúncio 3"}
  ])
})

app.listen(3333)