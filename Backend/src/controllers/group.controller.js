const Group = require("../models/Group");

// Create Group
const createGroup = async (req, res) => {
  try {
    const { name, createdBy, members } = req.body;

    if (!name || !createdBy) {
      return res.status(400).json({
        success: false,
        message: "Group name and createdBy are required",
      });
    }

    const group = await Group.create({
      name,
      createdBy,
      members: members || [createdBy],
    });

    res.status(201).json({
      success: true,
      data: group,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all groups
const getGroups = async (req, res) => {
  try {
    const groups = await Group.find()
      .populate("members", "name email")
      .populate("createdBy", "name email");

    res.json({
      success: true,
      data: groups,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createGroup,
  getGroups,
};
