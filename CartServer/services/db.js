//import mongoose

const mongoose = require('mongoose')

//define the connectionstring

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('Connected to mongodb');
})

//create a model for the products

const Product = mongoose.model('products',{
    //schema creation

    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const Wishlist=mongoose.model('wishlist',
    {id:Number,
    title:String,
    price:Number,
    image:String,
    description:String}
    )

module.exports={
    Product,
    Wishlist,
}