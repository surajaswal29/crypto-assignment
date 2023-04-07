const express = require('express');
const { CreateCryptoData, DeleteAll, setViews } = require('../controllers/cryptoController');

const router = express.Router();

// create Data Route
router.route('/data').get(CreateCryptoData);
router.route('/deleteMany').delete(DeleteAll);

module.exports = router;