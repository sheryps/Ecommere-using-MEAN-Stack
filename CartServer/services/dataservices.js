//import db

const db = require('./db')

//get all products from db

const getProducts = ()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statuscode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statuscode:400,
                    message:'Product not found'
                }
            }
        }
    )
}
//add to wishlist

const addtowishlist =(id,title,price,image,description)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statuscode:400,
                    message:'product already added to wishlist'
                }
            }
            else{
                const newProduct =new db.Wishlist({
                    id,
                    title,
                    price,
                    image,
                    description
                })
                newProduct.save()
                return{
                    status:true,
                    statuscode:200,
                    message:'Product added sucessfully'
                }
            }
        }
    )
    

}

//get all products from db

const getwishlist = ()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statuscode:200,
                    wishlists:result
                }
            }else{
                return{
                    status:false,
                    statuscode:400,
                    message:'wishlist is empty'
                }
            }
        }
    )
}


const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            console.log(result);
            if(result){
                return{
                    status:true,
                    statuscode:200,
                    message:'Product removed sucessfully',
                }
            }else{
                return{
                    status:false,
                    statuscode:400,
                    message:'Wishlist is empty'
                }
            }
        }
    )
}
module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}