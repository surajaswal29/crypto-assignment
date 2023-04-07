const CryptoModel = require('../models/cryptoModels');
const axios = require('axios');

// Fetch and Create Data
exports.CreateCryptoData = async (req,res,next)=>{

    // fetching data from wazirx api
    const {data} = await axios.get('https://api.wazirx.com/api/v2/tickers',{
        headers:{
            'Content-Type': 'application/json'
        }
    });

    const keys = Object.keys(data);;

    // looping over data object and creating 10 documents
    for(let i=0; i<10; i++){
        await CryptoModel.create({
            name:data[keys[i]].name,
            last:data[keys[i]].last,
            buy:data[keys[i]].buy,
            sell:data[keys[i]].sell,
            volume:data[keys[i]].volume,
            baseUnit:data[keys[i]].base_unit
           })
    }
    
    res.status(200).json({
        success:true,
        message:"Data Created Successfully"
    })

}


// set views
exports.setViews = async (req,res,next)=>{

    const crypto = await CryptoModel.find();

    console.log(crypto);

    // res.render("index",{
    //     name:crypto[0].name,
    //     last:crypto[0].last,
    //     buy:crypto[0].buy,
    //     sell:crypto[0].sell,
    //     volume:crypto[0].volume,
    //     base_unit:crypto[0].baseUnit,
    // });

    res.render("index", {crypto});
}
// ------Development-----
// Delete All Data at once
exports.DeleteAll = async (req,res,next)=>{
    const crypto = await CryptoModel.deleteMany();

    if(crypto){
        res.status(200).json({
            success:true,
            message:"Deleted Successfully"
        });
    }
}