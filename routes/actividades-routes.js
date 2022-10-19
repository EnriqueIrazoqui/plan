const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_actividad, get_actividad, put_actividad, delete_actividad} = require('../controller/actividades-controller');

router.post('/', post_actividad);

router.get('/:id_tema', get_actividad);

router.put('/', put_actividad);

router.delete('/:id_actividad', delete_actividad);

module.exports = router