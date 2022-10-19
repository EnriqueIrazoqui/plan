const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_reticula, get_reticula, put_reticula, delete_reticula} = require('../controller/reticula-controller');

router.post('/', post_reticula);

router.get('/:id_planestudio', get_reticula);

router.put('/', put_reticula);

router.delete('/:id_reticula', delete_reticula);

module.exports = router