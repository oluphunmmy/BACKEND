const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/Product.js'); //importing product data in other to use the format to populate the database
const app = express()
app.use(express.json())

//setting up the server to listen at port 3000
app.listen(3000, (req, res)=>{

    console.log("Server is Running at 3000")
})

//how to create a route '/'

app.get('/', (req, res)=>{
    res.send("Welcome to the Home Screen")
})
//creating route for /products on the database
app.post('/api/products', async (req, res)=>{
    try {
        const product = await Product.find(req.body)
        res.status(200).json(product)

    }catch (error) {
        //server error (status code) by specifiying the format in json
        res.status(500).json({message: error.message})
    }
})

app.get('/data', (req, res)=>{

    const data = [

        {
              id: 1,
              name: "Mark Zedrigex",
              stack: "Software Engineer",
              address: "Montgomery Austin TX 1234",
              status: "Employed",
              salary: 5000000,
              country: "New Zealand"
          },
          {
              id: 2,
              name: "Henry Crogan",
              stack: "Software Engineer",
              address: "Brooklyn",
              status: "Employed",
              salary: 7000000,
              country: "Broklyn"
          },
          {
            id: 3,
              name: "Judge Washington",
              stack: "Software Engineer",
              address: "Miami",
              status: "Employed",
              salary: 7000000,
              country: "USA"
          }
        ];

res.json(data)
})


mongoose.connect("mongodb+srv://olufunmilayoagboola:oluphunmmy@cluster0.oevanns.mongodb.net/Backend?retryWrites=true&w=majority&appName=Cluster0")
//helps to manage request either successful or failed
.then(()=>{
    console.log("Connection Successful!")

})
.catch(()=>{
    console.log("Connection Failed")
})