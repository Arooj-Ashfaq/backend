// const express = require("express")
// const mongoose = require("mongoose")
// const userRoutes = require("./routes/userRoutes")

// const app = express()
// app.use('/user' ,userRoutes )


// app.listen(3000, (req,res)=>{
//     console.log("server is started")
// })
// app.use(express.json())

// const mongoURL = "mongodb://localhost:27017/mybackend"
// mongoose.connect(mongoURL).then(() =>{
// 	console.log("database is connected")
// }).catch((err)=>{
//     console.log(err)
// })

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const app = express()
app.listen(3000, (req,res)=>{
    console.log('Server Started')
})
const mongoURL = "mongodb://localhost:27017/mybackend"
mongoose.connect(mongoURL).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use('/product' , productRoutes)

// app.get('/', (req,res)=>{
//     res.json('Welcome')
// })
// let user = []




// app.delete('/user/:id', (req, res) => {
//     const id = req.params.id
//     user = user.filter((user, id) => {user.id !== id})
//     res.json({
//       "message": "User is deleted",
//       "user": user
//     })
//   })