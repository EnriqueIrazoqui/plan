const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_cobtener, get_cobtener, put_cobtener, delete_cobtener} = require('../controller/competenciasObtener-controller');

router.post('/', post_cobtener);

router.get('/:id_contenido', get_cobtener);

router.put('/', put_cobtener);

router.delete('/:id_competenciasObtener', delete_cobtener);

module.exports = router