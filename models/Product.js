const { Timestamp } = require('mongodb')
const mongoose = require('mongoose') //importing mongoose db

//structuring how product data will be on the database
const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: [true, "Please input a product name"]
        },
        quantity:{
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        Image: {
            type: String,
            require: false
        },
        Address:{
            type: String,
            require: [true, "please enter your address"]
        },
        
    },

    {
        timestamps: true
    }
);
//exporting Productschema on database
const Product = mongoose.model('Product', ProductSchema)
module.exports = Product;