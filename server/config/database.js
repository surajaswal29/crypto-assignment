const mongoose = require('mongoose');

const Database = ()=>{
    mongoose.connect(process.env.DB_URI,{
        dbName:'crypto-db',
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(
    (data)=>{
        console.log(`Connected Successfully to Database (crypto-db) with host => ${data.connection.host}`);
    },
    (error)=>{
        console.log(`Could not connect to the database ${error}`);
    }).catch((error)=>{
        console.log(`Database Connection Error => ${error}`);
    })
}

module.exports = Database;