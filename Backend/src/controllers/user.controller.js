const User = require("../models/User");

// create user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUsers,
};
