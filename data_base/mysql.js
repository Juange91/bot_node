const Sequelize = require('sequelize');

const sequelize = new Sequelize('bot_prueba', 'bot_user', 'Juan12345', {
    host: 'db4free.net',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('Data base connected');
})
.catch(error => {
    console.log('Error de conexion es: '+ error);
})

module.exports = sequelize

