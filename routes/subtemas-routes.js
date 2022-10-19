const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_subtema, get_subtema, put_subtema, delete_subtema} = require('../controller/subtemas-controller');

router.post('/', post_subtema);

router.get('/:id_tema', get_subtema);

router.put('/', put_subtema);

router.delete('/:id_subtema', delete_subtema);

module.exports = router