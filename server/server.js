require('./config/config');

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var body; //probando

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.json('Hola Mundo')
})

app.get('/usuario', function(req, res) {
    res.json('get Usuario LOCAL!!!');

});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});
//3000 desarrollo y otros produccion
app.listen(process.env.PORT, () => {
    console.log("escuchando puerto: ", process.env.PORT);
});