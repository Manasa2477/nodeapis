const express = require('express')
const userRoutes = require('./routes/userRoutes')
const app = express()
app.use(express.json())
const PORT = 3000
app.use('/users',userRoutes)
console.log("jdfjfkjdfbkfjb");

app.listen(PORT,()=>{
  console.log(PORT)
})