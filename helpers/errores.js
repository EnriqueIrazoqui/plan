/**
 * Funcion para obtener el mensaje en formato json en caso de algun error, esta funcion es utilizada en la funcion generate_code 
 * @params {codigo: int, mensaje: text} 
 * @returns json: {ok: false, message:{status: int, error_text: text} }
 */
 const return_error = (codigo, mensaje) => {
    return {
        'ok': false,
        'message': {
            'status': codigo,
            'error_text': mensaje
        }
    };
}
module.exports = {
    return_error
}