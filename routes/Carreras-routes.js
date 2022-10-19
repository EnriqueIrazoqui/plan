const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const { post_carreras, get_carreras, put_carreras, delete_carreras } = require('../controller/carreras-controller');

router.post('/', post_carreras);

router.get('/', get_carreras);

router.put('/', put_carreras);

router.delete('/', delete_carreras);

module.exports = router