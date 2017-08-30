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
            console.log('SUCCESS?');
            res.send(truck);
        }).catch(error);
    //WHY ISN'T THE PROMISE WORKING
    //USE BLUEBIRD?


});

/**************FOR LATER****

// //edit Truck Details
router.put('/trucks/:id', function(req, res, error) {
    res.send({type: 'PUT'});
});

//delete truck from DB
router.delete('/trucks/:id', function(req, res, error) {
    Truck.findByIdAndRemove().then(
        console.log('deleted'));
    res.send({ type: 'DELETE' });
});

***********************************/

module.exports = router;