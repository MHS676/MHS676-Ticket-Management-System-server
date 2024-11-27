const Bus = require('../models/Bus'); // Assuming you have a Bus model

// Add a new bus
const addBus = async (req, res) => {
  try {
    const { name, route, seats } = req.body;
    const bus = await Bus.create({ name, route, seats });
    res.status(201).json({ message: 'Bus added successfully', bus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a bus
const updateBus = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const bus = await Bus.findByIdAndUpdate(id, updates, { new: true });
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json({ message: 'Bus updated successfully', bus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a bus
const deleteBus = async (req, res) => {
  try {
    const { id } = req.params;
    const bus = await Bus.findByIdAndDelete(id);
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.status(200).json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addBus, updateBus, deleteBus };
