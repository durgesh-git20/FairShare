const Balance = require("../models/Balance");
const simplifyBalances = require("../utils/balanceSimplifier");

// 1️⃣ Get raw balances for a user
const getUserBalances = async (req, res) => {
  try {
    const userId = req.params.userId;

    const owes = await Balance.find({ fromUser: userId })
      .populate("toUser", "name email");

    const owedBy = await Balance.find({ toUser: userId })
      .populate("fromUser", "name email");

    res.json({
      success: true,
      owes,
      owedBy,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// 2️⃣ Get simplified balances
const getSimplifiedBalances = async (req, res) => {
  try {
    const balances = await Balance.find();

    const simplified = simplifyBalances(balances);

    res.json({
      success: true,
      data: simplified,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUserBalances,
  getSimplifiedBalances,
};
