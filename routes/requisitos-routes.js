const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_requisitos, get_requisitos, put_requisitos, delete_requisitos} = require('../controller/requisitos-controller');

router.post('/', post_requisitos);

router.get('/:id_asignatura', get_requisitos);

router.put('/', put_requisitos);

router.delete('/id_requisito', delete_requisitos);

module.exports = router