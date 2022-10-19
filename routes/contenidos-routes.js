const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_contenidos, get_contenidos, put_contenidos, delete_contenidos} = require('../controller/contenidos-controller');

router.post('/', post_contenidos);

router.get('/:id_asignatura', get_contenidos);

router.put('/', put_contenidos);

router.delete('/id_contenido', delete_contenidos);

module.exports = router