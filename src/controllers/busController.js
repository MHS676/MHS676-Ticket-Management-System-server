const Bus = require('../models/Bus');

// Create a new bus
const createBus = async (req, res) => {
  try {
    const { name, route, capacity, seatsAvailable } = req.body;

    // Validate input
    if (!name || !route || !capacity || !seatsAvailable) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const bus = await Bus.create({ name, route, capacity, seatsAvailable });
    res.status(201).json(bus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an existing bus
const updateBus = async (req, res) => {
  try {
    const { name, route, capacity, seatsAvailable } = req.body;

    // Optional validation
    if (!name && !route && !capacity && !seatsAvailable) {
      return res.status(400).json({ error: 'At least one field is required to update' });
    }

    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bus) return res.status(404).json({ error: 'Bus not found' });

    res.status(200).json(bus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a bus
const deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) return res.status(404).json({ error: 'Bus not found' });

    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createBus, updateBus, deleteBus };
