//import express

const express = require('express')

//create app using express

const app = express()

//import cors

const cors = require('cors')

//import dataservices
const dataservices = require('./services/dataservices')
//use json parser for server responses

app.use(express.json())

//using cors specify the origin to server

app.use(cors({
    origin:'http://localhost:4200'
}))

//setup a port number

app.listen(3000,()=>{
    console.log('listening on port:3000');
})

//API call to get all products

app.get('/all-products',(req,res)=>{
    dataservices.getProducts().then(
        result=>{
            res.status(result.statuscode).json(result)
        }
    )
})

//api to add details to wishlist

app.post('/addtowishlist',(req,res)=>{
    dataservices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statuscode).json(result)
        }
    )
})

app.get('/getwishlist',(req,res)=>{
    dataservices.getwishlist().then(
        result=>{
            res.status(result.statuscode).json(result)
        }
    )
})

app.delete('/deletewish/:id',(req,res)=>{
    dataservices.deletewish(req.params.id).then(
        result=>{
            res.status(result.statuscode).json(result)
        }
    )
})

