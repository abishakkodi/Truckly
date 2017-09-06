const express = require('express');
const router = express.Router();
const Truck = require('../models/trucks');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


//list of trucks
router.get('/trucks', function(req, res, error) {
    Truck.find({}).then(function(allTrucks){
        console.log(allTrucks);
        res.send(allTrucks);
    });

    // res.send({ type: 'GET' });
});

//add your truck to DB
router.post('/trucks', function(req, res, error) {

    var truck = new Truck(req.body);
    truck.save().then(
        function(){
            console.log('SUCCESSFULLY ADDED TO MONGO');
            res.send(truck);
        }).catch(error);
    //WHY ISN'T THE PROMISE WORKING
    //USE BLUEBIRD?


});


module.exports = router;