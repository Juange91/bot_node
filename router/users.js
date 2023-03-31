const express = require('express');
const router = express.Router();
const {UserSchema} = require('../models/user')

router.get('/', (req, res) =>{

    UserSchema.findAll()

    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
})

module.exports = router