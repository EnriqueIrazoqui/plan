const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_oferta, get_oferta, put_oferta, delete_oferta} = require('../controller/oferta-controller');


router.post('/', body('ID_Unidad').exists(),
                 body('ID_Extension').exists(),
                 body('ID_PlanEstudio').exists(),
                 body('Estatus').exists(),
                 post_oferta);

router.get('/:id_planestudio', get_oferta);

router.put('/', body('ID_Oferta').exists(),
                body('ID_Unidad').exists(),
                body('ID_Extension').exists(),
                body('ID_PlanEstudio').exists(),
                body('Estatus').exists(),
                put_oferta);

router.delete('/:id_oferta', delete_oferta);

module.exports = router