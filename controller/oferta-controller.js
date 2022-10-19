const express = require('express');
const pool = require('../config/mariadb.js');

const post_oferta = async (req, res) => {
    const {id_unidad,id_extension,id_plan,estatus} = req.body;
    console.log(id_unidad,id_extension,id_plan,estatus);
    await pool.getConnection().then( async (conn) => {
        const data = [id_unidad, id_extension, id_plan,estatus];
        try{
            const query = await conn.query("INSERT INTO ofertaacademica(ID_Unidad, ID_Extension, ID_PlanEstudio, Estatus) VALUES(?, ?, ?, ?)", data);
            console.log(query);

            res.status(201).json({
                'ok': true,
                'mensaje': 'oferta registrada con exito'
            })
            conn.end();
        }catch(error){
            res.status(500).json({
                'ok': false,
                'mensaje': 'internal server error'
            })
            conn.end();
        }
    });

}

const get_oferta = (req, res) => {

}

const put_oferta = (req, res) => {

}

const delete_oferta = async (req, res) => {
    await pool.getConnection().then( async (conn) => {
        try{
            const query = await conn.query("DELETE FROM ofertaacademica WHERE nombre = ?", [req.body.id_oferta]);
            res.status(200).json({
                'ok': true,
                'mensaje': '...'
            })
            conn.end();
        }catch(error){
            res.status(500).json({
                'ok': false,
                'mensaje': 'internal server error'
            })
            conn.end();
        }
    });
}

module.exports = {
    post_oferta,
    get_oferta,
    put_oferta,
    delete_oferta
}