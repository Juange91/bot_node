const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/', require('./router/users'));
app.use('/api/messages', require('./router/messages'));

app.listen(PORT, (err) => {
    if (err) {
        console.log('Error en el servidor');
    } else {
        console.log(`Servidor conectado en el puerto ${PORT}`);
    }
})