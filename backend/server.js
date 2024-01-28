const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000;

const Plane = require("./models/planeModel.js")


const today = new Date(); // Find today's date which will grab today's flights.

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

year = year.toString();
month = month.toString();
day = day.toString();

if(month < 10) {
    month = "0" + month;
}

if(day < 10) {
    day = "0" + day;
}

// ONLY RUN THIS ONCE!!!!!!!! or else there will be very very many duplicates............
fetch(`https://aircontrol1-c8a7574536ec.herokuapp.com/flights?date=${year}-${month}-${day}&destination=DFW`) // Fetches the data from the API and saves it to the MongoDB Atlas cloud server.
    .then(response => response.json())
    .then(data => {
        for(const item of data) {
            const plane = new Plane({
                flightNumber: item.flightNumber,
                origin: item.origin,
                destination: item.destination,
                distance: item.distance,
                duration: item.duration,
                departureTime: item.departureTime,
                arrivalTime: item.arrivalTime,
                aircraft: item.aircraft,
                arrived: false,
                runway: 0
            })
            plane.save()
        }
    });

app.use(express.json())
app.use(express.urlencoded({extended: false}))


// All of the following is mainly used for testing purposes.
app.get('/', (req, res) => { // Used to see if the server is up.
    res.send("test2!")
})

app.post('/planes', async(req, res) => { // Used to access the database
    try {
        const plane = await Plane.create(req.body)
        res.status(200).json(plane)
    } catch (error) {
        console.log("fail :(")
        res.status(500).json({message: error.message})
    }
})

app.get('/planes/', async(req, res) => { // Used to access the database
    try {
        const plane = await Plane.find({});
        res.status(200).json(plane)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log("failed to change status")
    }
})

app.get('/planes/:id', async(req, res) => { // Used to access the database
    try {
        const {id} = req.params;
        const plane = await Plane.findById(id);
        res.status(200).json(plane)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log("failed to change status")
    }
})

app.put('/planes/:id', async(req, res) => { // Used to update database entries
    try {
        const {id} = req.params;
        const plane = await Plane.findByIdAndUpdate(id, req.body);

        if(!plane) {
            return res.status(404).json({message: "no such product found"})
        }

        const updatedPlane = await Plane.findById(id);
        res.status(200).json(updatedPlane);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.set("strictQuery", false)

mongoose.connect("mongodb+srv://fella:aircontrol1@aircontroldb.u18xj1e.mongodb.net/?retryWrites=true&w=majority") // Connects to the MongoDB Atlas cloud server
.then(() => {    
    console.log('ur in mgdb!') // Logs this.
    
    app.listen(port, ()=>{ // Makes sure server is running.
        console.log(`running on port ${port}`)
    })
}).catch(() => {
    console.log(error)
})
