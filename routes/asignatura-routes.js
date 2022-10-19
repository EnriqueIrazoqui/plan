const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const { post_asignatura, get_asignatura, put_asignatura, delete_asignatura } = require('../controller/asignatura-controller');

router.post('/', post_asignatura);

router.get('/', get_asignatura);

router.put('/', put_asignatura);

router.delete('/id_asignatura', delete_asignatura);

module.exports = router