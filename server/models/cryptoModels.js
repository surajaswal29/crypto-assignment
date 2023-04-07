const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Name"]
    },
    last:{
        type:Number,
        required:[true, "Please Enter Last"]
    },
    buy:{
        type:Number       
    },
    sell:{
        type:Number       
    },
    volume:{
        type:Number        
    },
    baseUnit:{
        type:String        
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('CryptoModel',CryptoSchema,'DemoData');