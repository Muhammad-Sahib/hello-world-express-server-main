import express from 'express'
const app = express()
const port =process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log("some changes");
  console.log('responsive from sir imzammam'+ req.ip)
  res.send('responsive from sir imzammam'+ req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})