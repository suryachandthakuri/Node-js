require('dotenv').config()
const express = require('express')
const app = express()
const port = 3300

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res) =>{
    res.send('suryachand55')
})

app.get('/login',(req,res) =>{
    res.send('<h1>ME SURYA bhainp</h1>')
})

app.get('/youtube',(req,res) =>{
    res.send('<h2>SURYA HERE</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})