
const DataTypes = require('sequelize');
const sequelize = require("../data_base/mysql");

const messageSchema = sequelize.define(
    'messages', {
    cod_message: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    type_message: {
        type: DataTypes.STRING
    },
    des_message: {
        type: DataTypes.STRING
    }

},
    {
        timestamps: true
    }
);

module.exports = {messageSchema}




