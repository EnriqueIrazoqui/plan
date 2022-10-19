const express = require('express');
const app = express();
require('dotenv').config();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());

app.use('/v1/carreras', require('./routes/Carreras-routes.js'));

app.use('/v1/plan', require('./routes/plan-routes.js'));

app.use('/v1/oferta', require('./routes/oferta-routes.js'));

app.use('/v1/asignatura', require('./routes/asignatura-routes.js'));

app.use('/v1/requisitos', require('./routes/requisitos-routes.js'));

app.use('/v1/reticula', require('./routes/reticula-routes.js') );

app.use('/v1/contenido', require('./routes/contenidos-routes.js') );

app.use('/v1/competencias', require('./routes/competencias-routes.js') );

app.use('/v1/competenciasobtener', require('./routes/competenciasobtener-routes.js') );

app.use('/v1/competenciasprevias', require('./routes/competenciasprevias-routes.js') );

app.use('/v1/temas', require('./routes/temas-routes.js') );

app.use('/v1/competenciastema', require('./routes/competenciastema-routes.js') );

app.use('/v1/actividades', require('./routes/actividades-routes.js') );

app.use('/v1/subtemas', require('./routes') );


app.listen(process.env.NODE_PORT, () => {
    console.log('server running '+process.env.NODE_PORT);
});