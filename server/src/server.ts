import express from 'express'

const app = express()



app.get('/ads', (req, res) => {
  return res.json([
    {
      id: 3,
      name: "Anúncio 3"
    },
    {
      id: 2,
      name: "Anúncio 2"
    }
  ])
})

app.listen(3333)