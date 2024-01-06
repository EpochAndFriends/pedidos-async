const express = require('express');
const router = express.Router();
const { index } = require('../../controllers/api/indexController');


router.get("/" ,  index);

module.exports = router;
