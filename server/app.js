const express = require('express');
const crypto = require('./routes/cryptoRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const { setViews } = require('./controllers/cryptoController');
const hbs = require('hbs');

const App = express();





App.set("views", path.join(__dirname, "views"));
App.set('view engine', 'hbs');


hbs.registerHelper('addOne', function(v) {
   return v +1;
});

// setting view route
App.get('/',setViews)

const staticPath = path.join(__dirname, "../frontend");

App.use(express.static(staticPath));
App.use(express.json());
App.use(bodyParser.urlencoded({extended:true}));

App.use('/api/v1', crypto)

module.exports = App;
