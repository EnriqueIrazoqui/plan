const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_tema, get_tema, put_tema, delete_tema} = require('../controller/tema-controller');

router.post('/', post_tema);

router.get('/:id_contenido', get_tema);

router.put('/', put_tema);

router.delete('/:id_tema', delete_tema);

module.exports = router