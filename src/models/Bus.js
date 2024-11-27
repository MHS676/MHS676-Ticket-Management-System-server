const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  route: { type: String, required: true },
  capacity: { type: Number, required: true, default: 50 },
  seatsAvailable: { type: Number, required: true, default: 50 },
});


const Bus = mongoose.model('Bus', busSchema);
module.exports = Bus;
