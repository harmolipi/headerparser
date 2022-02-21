const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/apiController');

router.get('/whoami', api_controller.get_whoami);

module.exports = router;
