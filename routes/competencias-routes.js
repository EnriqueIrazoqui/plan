const express = require('express');
const router = express.Router();

const { body } = require("express-validator");
 
const {post_competencia, get_competencia, put_competencia, delete_competencia} = require('../controller/competencias-controller')

router.post('/', post_competencia);

router.get('/', get_competencia);

router.put('/', put_competencia);

router.delete('/:id_competencia', delete_competencia);

module.exports = router