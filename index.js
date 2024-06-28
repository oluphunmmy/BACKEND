const express = require('express'); //initializing express
const mongoose = require('mongoose');
// const Book = require('./models/bookModels.js') //importing product data in other to use the format to populate the database
const bookRouter = require('./routes/book.route.js')
const userRouter = require('./routes/user.route.js')
const cors = require('cors')
const app = express() //using express to create our route
app.use(express.json()) //midware
app.use(express.urlencoded({extended: false}))
app.use(cors())
const Usermod = require('./models/UserModel.js')
require('dotenv').config();

// app.use(cors({
//     origin: "http://localhost/3001",
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
//     allowHeaders: ['content-type']
// }))

app.use(process.env.APP_BOOK_ROUTE, bookRouter)
app.use(process.env.APP_AUTH_ROUTE, userRouter)
// app.use('/login', userRouter)

// app.post('/login', async (req, res)=>{
//     try {
//         const {email, password} = req.body
//         Usermod.findOne({email: email})
//             .then(user=>{
//                 if(user){
//                     if(user.password === password){
//                         res.json("successful")
//                     }else{
//                         res.json("password is incorrect")
//                     }
//                 }else{
//                     res.json("No record existed")
//                 }
//             })
        

//     } catch (error) {}
// })

//setting up the server to listen at port 3000


app.listen(3001, (req, res)=>{

    console.log("Server is Running at 3001")
})

// app.post('/api/book', async (req, res)=>{
//     try {
//         if (
//             !req.body.title ||
//             !req.body.author ||
//             !req.body.publishedYear
//         ){
//             return res.status(400).send({
//                 message: "send all required fields: title, author, published year"
//             })
//         }
//         const book = await Book.create(req.body)
//         res.status(200).json(book)
//     }catch (error){
//         console.log(error)
//         res.status(500).json({message: error.message})
//     }
// })
// app.get('/api/book', async (req, res)=>{
//     try {
//         const books = await Book.find({})
//         res.status(200).json({count: books.length,
//             data: books
//         });

//     }catch (error) {
//         //server error (status code) by specifiying the format in json
//         res.status(500).json({message: error.message})
//     }
// })
// app.get('/api/book/:id', async (req, res)=>{
//     try {
//         const {id} = req.params;
//     const book = await Book.findById(id);
//     res.status(200).json(book)
//     }catch (error){

//         res.status(500).json({message: error.message})
//     }
// })

// app.put('/api/book/:id', async (req, res)=>{
//     try{
//         const {id} = req.params;
//         const book = await Book.findByIdAndUpdate(id, re.body)
//         if (!book){
//             return res.status(404).json({message: 'Book not found'})
//         }
//         const updatedBook = Book.findById(id)
//         res.status(200).json(updatedBook)
//     }catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })
// app.delete('/api/book/:id', async (req, res)=>{
//     try{
//         const {id} = req.params;
//         const book = await Book.findByIdAndDelete(id)
//         if (!book){4
//             return res.status(404).json({message: 'unable to delete: Book not found'})
//         }
//         res.status(200).json({message: "Book deleted successfully!"})
//     }catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


//connecting my app to the database
mongoose.connect(process.env.MONGODB_URL)
//helps to manage request either successful or failed

//mongodb+srv://olufunmilayoagboola:9XESzvepp00qYTuS@cluster0.oevanns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
.then(()=>{
    console.log("Connection Successful!")

})
.catch(()=>{
    console.log("Connection Failed")
})