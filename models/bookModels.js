const { timestamps } = require('mongodb')
const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    publishedYear: {
        type: Number,
        require
    },

},
{
    timestamps: true
}

);
const Book = mongoose.model('cat', bookSchema);
module.exports = Book;