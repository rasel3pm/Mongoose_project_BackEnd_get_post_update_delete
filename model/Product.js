const {model,Schema}=require('mongoose');


const productSchema= new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    created:{
        type:Date,
        default: Date.now
    },
})

const product =model("Product", productSchema);

module.exports=product