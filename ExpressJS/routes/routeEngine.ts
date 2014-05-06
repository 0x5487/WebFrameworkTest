///<reference path='lib.d.ts'/>
var express = require('express');
var router = express.Router();



function start(app) {


    router.use('/bar', function (req, res, next) {
        res.send('hello bar');
    });

    app.use('/jason', router);


    app.get('/', function (req, res) {
        res.send('hello jason');
    });

};


module.exports = start;
