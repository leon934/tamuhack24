const express = require("express")
const app = express()

const mongoose = require("mongoose")


const port = 3000;

app.get('/', (req, res) => { // Used to access the server
    res.send("test2!")
})

mongoose.set("strictQuery", false)

mongoose.connect("mongodb+srv://fella:aircontrol1@aircontroldb.u18xj1e.mongodb.net/?retryWrites=true&w=majority") // Connects to the MongoDB Atlas cloud server
.then(() => {    
    console.log('ur in mgdb!') // Logs this.
    
    app.listen(port, ()=>{ // Makes sure server is running.
        console.log("test!")
    })
}).catch(() => {
    console.log(error)
})