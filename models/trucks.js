const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TruckSchema = new Schema({

  brand: {
    type: String,
    required:[true, 'Brand Field is Required']
  },

  model: {
    type: String,
    required:[true, 'Model Field is Required']
  },

  year: {
    type: Number,
    required:[true, 'Year Field is Required']
  },

  owner: {
    type: String,
    required:[true, 'Owner Field is Required']
  },

  price: {
    type: Number,
    required:[true, 'Price Field is Required']
  },

  picture: {
    type: String,
    required:[true, 'Picture Field is Required']
  },

  location: {
    type: String,
    required: [true, 'Location is Required (City)']
  }

});

const Truck = mongoose.model('Truck', TruckSchema);


module.exports = Truck;

