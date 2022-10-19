const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_cprevias, get_cprevias, delete_cprevias} = require('../controller/cprevias-controller');

router.post('/', post_cprevias);

router.get('/:id_contenido', get_cprevias);

router.delete('/:id_competenciasprevias', delete_cprevias);

module.exports = router