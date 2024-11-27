const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  price: { type: Number, required: true },
  timeSlot: { type: Date, required: true },
  availability: { type: Number, required: true },
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
