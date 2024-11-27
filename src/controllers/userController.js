const getUsers = (req, res) => {
  res.status(200).json({ message: 'Get all users' });
};

const getUserById = (req, res) => {
  res.status(200).json({ message: `Get user with ID: ${req.params.id}` });
};

module.exports = { getUsers, getUserById };
