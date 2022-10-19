const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_plan, get_plan, put_plan, delete_plan} = require('../controller/plan-controller');

router.post('/', post_plan);

router.get('/:id_carrera', get_plan);

router.put('/', put_plan);

router.delete('/:id_planestudio', delete_plan);

module.exports = router