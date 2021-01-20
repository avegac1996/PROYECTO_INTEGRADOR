// Ruta de login
// Empezamos importando a nuestro archivo /routes/login.js 
// as dependencias que se requieren para el funcionamiento; 
// en este caso ya requerimos del modelo recién creado; ya que es a través de este modelo que vamos a poder guardar,
// editar, buscar, y listas los usuarios registrados.
// const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('./../models/usuario');
const app = express();

// Es de suma importancia que nuestros modelos sean asignados con la primera letra en mayúscula,
// esto para que podamos diferenciar el uso del modelo en el código.
// Las rutas se crean con la siguiente sintaxis:
app.post('/login', function (req, res) {
    // here write code
})
// Dentro de la ruta, debemos de obtener la información proveniente del frontend.
let body = req.body;

// guardamos la información que recibimos.
Usuario.findOne({ email: body.email }, (erro, usuarioDB) => {
    if (erro) {
        return res.status(500).json({
            ok: false,
            err: erro
        })
    }
    // Verifica que exista un usuario con el mail escrita por el usuario.
    if (!usuarioDB) {
        return res.status(400).json({
            ok: false,
            err: {
                message: "Usuario o contraseña incorrectos"
            }
        })
    }
    // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
    if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
        return res.status(400).json({
            ok: false,
            err: {
                message: "Usuario o contraseña incorrectos"
            }
        });
    }
    // Genera el token de autenticación
    let token = jwt.sign({
        usuario: usuarioDB,
    }, process.env.SEED_AUTENTICACION, {
        expiresIn: process.env.CADUCIDAD_TOKEN
    })
    res.json({
        ok: true,
        usuario: usuarioDB,
        token,
    })
})
// y al finalizar, exportamos nuevamente app
module.exports = app;