
const {messageSchema} = require('../models/messages')
const qrcode = require('qrcode-terminal');
const { Client,LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    listenMessage();
});

const listenMessage = () => {
    client.on('message', (msg) => {
        const { from, to, body } = msg;
        console.log(from, to, body);

        if (body) {
            welcome(from);
        }
})
}

const sendMessage = (to, msg)=>{
    client.sendMessage(to, msg)
};

const welcome = (from) => {
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
 
client.initialize();