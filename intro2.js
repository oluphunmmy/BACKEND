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

