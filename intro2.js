//Import the require module ==> Express

const express = require('express')

//Create express application
const app = express()

//helps to pass Json Request
app.use(express.json)

//custom middware
app.use((req, res, next)=>{
  console.log(`[${new Date().toLocaleString()}] ${req.methos} ${res.url}`)
  next()
})


//Route to handle GET request to the homepage
app.get('/', (req, res)=>{
  res.send("Welcome to Express.js PlayGround")
})
app.get('/about', (req,res)=>{
  res.send("This is the about Page")
})

//ROUTE to handle Post request t0 /data
app.get('/data', (req,))

// app.listen(3000, ()=>{
//       console.log("Sever is running on port 3000")
// });

// app.get('/', function (req, res) {
//   res.send('Hello From Backend')
// })


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

//creating route for /products on the database
// app.post('/api/book', async (req, res)=>{
//     try {
//         const book = await Book.create(req.body)
//         res.status(200).json(book)

//     }catch (error) {
//         //server error (status code) by specifiying the format in json
//         res.status(500).json({message: error.message})
//     }
// })

//how to create a route '/'

// app.get('/', (req, res)=>{
//     res.send("Welcome to the Home Screen")
// })