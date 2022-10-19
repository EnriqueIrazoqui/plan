const express = require('express');
const router = express.Router();

const { body } = require("express-validator");

const {post_ctema, get_ctema, delete_ctema} = require('../controller/competenciastema-controller');

router.post('/', post_ctema);

router.get('/:id_tema', get_ctema);

router.delete('/:id_competenciatema',  delete_ctema);

module.exports = router