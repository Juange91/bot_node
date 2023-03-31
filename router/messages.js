const express = require('express');
const router = express.Router();
const {messageSchema} = require('../models/messages');
const sendMessage = require('../bot/index');

const consulta = (from) => {
    messageSchema.findOne()
    .then(result => {
        let resultado = JSON.stringify(result);
        let final = JSON.parse(resultado);
        sendMessage(from, final.des_message);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
}


module.exports = router
module.exports = consulta