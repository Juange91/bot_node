
const DataTypes = require('sequelize');
const sequelize = require("../data_base/mysql");

const UserSchema = sequelize.define(
    'users', {
    number_user: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name_user: {
        type: DataTypes.STRING
    }

},
    {
        timestamps: true
    }
);

module.exports = {UserSchema}




