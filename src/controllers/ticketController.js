const Ticket = require('../models/Ticket');
const Bus = require('../models/Bus');

// Admin: Add a new ticket
const createTicket = async (req, res) => {
  try {
    const { busId, price, timeSlot, availability } = req.body;
    const bus = await Bus.findById(busId);

    if (!bus) return res.status(404).json({ error: 'Bus not found' });

    const ticket = await Ticket.create({ busId, price, timeSlot, availability });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Admin: Update ticket information
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Admin: Delete a ticket
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// User: View tickets by bus and time period
const getTickets = async (req, res) => {
  try {
    const { busId, timeSlot } = req.query;
    const query = {};

    if (busId) query.busId = busId;
    if (timeSlot) query.timeSlot = { $gte: new Date(timeSlot) };

    const tickets = await Ticket.find(query).populate('busId');
    res.status(200).json(tickets);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// User: Purchase a ticket
const purchaseTicket = async (req, res) => {
  try {
    const { ticketId } = req.body;
    const ticket = await Ticket.findById(ticketId);

    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    if (ticket.availability <= 0) return res.status(400).json({ error: 'Ticket sold out' });

    ticket.availability -= 1;
    await ticket.save();

    res.status(200).json({ message: 'Ticket purchased successfully', ticket });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTicket, updateTicket, deleteTicket, getTickets, purchaseTicket };
