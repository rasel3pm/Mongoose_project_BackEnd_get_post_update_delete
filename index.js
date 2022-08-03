const express = require('express');
const mongoose = require('mongoose')
const productRouter = require('./routes/productRouter')
const userRouter = require('./routes/userRouter')
const app = express();
require('dotenv').config({ path: "./config/.env" })
app.use(express.json())


app.use("/api/v1/product", productRouter)
app.use("/api/v1/user", userRouter)
mongoose.connect("mongodb+srv://raselkibria_11:raselkibria_11@cluster0.miif3gk.mongodb.net/DemoProject?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    })
    .then(res => {
        console.log("Database is connected")
    })
    .catch(err => {
        console.log("Database is error " + err)
    })





const port = process.env.PORT || 3001


app.listen(port, () => {
    console.log(`Server is running port : ${port}`)
})