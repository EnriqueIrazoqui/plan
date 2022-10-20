const express = require('express');
const pool = require('../config/mariadb.js');

const post_contenidos = async (req, res) => {
    const {ID_Asignatura, caracterización, intensionDidactica, practicas, proyecto, evaluacion, bibliografia, version} = req.body;
    console.log(ID_Asignatura, caracterización, intensionDidactica, practicas, proyecto, evaluacion, bibliografia, version);


    /*Metodo de post para contenidos con validaciones de express*/
    await pool.getConnection().then( async (conn) => {
          
        const data = [ID_Asignatura, caracterización, intensionDidactica, practicas, proyecto, evaluacion, bibliografia, version];
        try{

            
            const query = await conn.query("INSERT INTO contenidos(ID_Asignatura, Caracterizacion, intencionDidactica, practicas, proyecto, evaluacion, bibliografia, version) VALUES(?, ?, ?, ?, ?, ?, ?, ?)", data);
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

const get_contenidos = (req, res) => {

}

const put_contenidos = (req, res) => {

}

const delete_contenidos = (req, res) => {

}

module.exports = {
    post_contenidos,
    get_contenidos,
    put_contenidos,
    delete_contenidos
}