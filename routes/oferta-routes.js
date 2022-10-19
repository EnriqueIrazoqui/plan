const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_oferta, get_oferta, put_oferta, delete_oferta} = require('../controller/oferta-controller');

router.post('/', post_oferta);

router.get('/:id_planestudio', get_oferta);

router.put('/', put_oferta);

router.delete('/:id_oferta', delete_oferta);

module.exports = router