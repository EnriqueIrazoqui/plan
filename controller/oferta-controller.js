const express = require('express');
const pool = require('../config/mariadb.js');
const { validationResult } = require("express-validator");

  

const post_oferta = async (req, res) => {
    const {ID_Unidad, ID_Extension, ID_PlanEstudio, Estatus} = req.body;
    console.log(ID_Unidad, ID_Extension, ID_PlanEstudio, Estatus);

    const validation_errors = validationResult(req);

      /*Validacion de espacion en blanco*/
      if (!validation_errors.isEmpty()) {
        const response = return_error(400, 'El formato esta incompleto');
        return res.status(400).json(response);
     }

    /*Metodo de post para oferta con validaciones de express*/
    await pool.getConnection().then( async (conn) => {
          
        const data = [ID_Unidad, 
                     ID_Extension, 
                     ID_PlanEstudio, 
                     Estatus];
        try{

            //validar que el plan exista
            const validacion_plan = await conn.query('SELECT count(ID_PlanEstudio) as result FROM planesestudio WHERE ID_PlanEstudio = ? ', [ID_PlanEstudio]);
                if(parseInt(validacion_plan[0].result) === 0){
                    const error = return_error(406, "El plan de estudio no se encuentra registrado");
                    return res.status(406).json(error);
                }
            
            const query = await conn.query("INSERT INTO ofertaacademica(ID_Unidad, ID_Extension, ID_PlanEstudio, Estatus) VALUES(?, ?, ?, ?)", data);
            console.log(query);
            
            res.status(201).json({
                'ok': true,
                'message': {
                    "status code": 201,
                    "messageText":"oferta registrada con exito"
                }
            })
            conn.end();

        }catch(error){
            res.status(500).json({
                'ok': false,
                'message': {
                    "status code": 500,
                    "messageText":"internal server error"
                }
            })
            conn.end();
        }
    });
}

const get_oferta = async (req, res) => {
    const {ID_Oferta, Estatus} = req.body;


    await pool.getConnection().then( async (conn) => {
        const data = [ID_Oferta,  
                      Estatus];
        try{
            const query = await conn.query("SELECT * FROM ofertaacademica WHERE ID_Oferta= ? AND Estatus = ?", data);
            res.status(200).json(query);
            conn.end();
        }catch(error){
            res.status(500).json({
                'ok': false,
                'mensaje': 'algo salio mal'
            })
            conn.end();
        }
    });

}

const put_oferta = async (req, res) => {

    const validation_errors = validationResult(req);

      /*Validacion de espacion en blanco*/
      if (!validation_errors.isEmpty()) {
        const response = return_error(400, 'El formato esta incompleto');
        return res.status(400).json(response);
     }

    await pool.getConnection().then( async (conn) => {
        try{
            const data = [req.body.ID_Oferta, req.body.ID_Unidad, req.body.ID_Extension, req.body.ID_PlanEstudio, req.body.Estatus, req.body.ID_Oferta];
            const query = await conn.query("UPDATE ofertaacademica SET ID_Oferta = ?, ID_Unidad = ? , ID_Extension = ?, ID_PlanEstudio = ?, Estatus= ? WHERE ID_Oferta = ?", data);
            res.status(201).json({
                'ok': true,
                'mensaje': 'el elemento fue actualizado'
            })
            conn.end();
        }catch(error){
            res.status(500).json({
                'ok': false,
                'mensaje': 'algo salio mal'
            })
            conn.end();
        }
    });
}

const delete_oferta = async (req, res) => {
    await pool.getConnection().then( async (conn) => {
        try{
            const query = await conn.query("DELETE FROM ofertaacademica WHERE ID_Oferta = ?", req.body.ID_Oferta);
            res.status(200).json({
                'ok': true,
                'mensaje': '......'
            })
            conn.end();
        }catch(error){
            res.status(500).json({
                'ok': false,
                'mensaje': 'algo salio mal'
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