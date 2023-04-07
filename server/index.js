const App = require('./app.js');
const dotenv = require('dotenv');
const Database = require('./config/database.js');

// configuring DotEnv - Environment Variable
dotenv.config({path:'./config/config.env'});

// setting default PORT
const PORT = process.env.PORT || 8000;

// connect to database
Database();

App.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
})