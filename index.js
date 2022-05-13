const express = require("express")
const mongoose = require("mongoose")
const authRouter = require("./router/authRouter")

app = express()
app.use(express.json())

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://feyza:feyza@cluster0.gis9o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(3000, () => {console.log("server running...")}) // server ayağa kalktı demek
    } catch (error) {

    }
}

start()
