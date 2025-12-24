const Expense = require("../models/Expense");
const Group = require("../models/Group");
const Balance = require("../models/Balance");

const {
  calculateEqualSplit,
  calculateExactSplit,
  calculatePercentSplit,
} = require("../utils/splitCalculator");

const addExpense = async (req, res) => {
  try {
    const {
      groupId,
      description,
      amount,
      paidBy,
      splitType = "EQUAL",
      splits,
    } = req.body;

    if (!groupId || !amount || !paidBy) {
      throw new Error("groupId, amount and paidBy are required");
    }

    const group = await Group.findById(groupId);
    if (!group) throw new Error("Group not found");

    const isMember = group.members.some(
      (member) => member.toString() === paidBy.toString()
    );
    if (!isMember) throw new Error("paidBy must be a group member");

    let finalSplits;

    switch (splitType) {
      case "EXACT":
        if (!splits?.length) {
          throw new Error("Splits required for EXACT split");
        }
        finalSplits = calculateExactSplit(amount, splits);
        break;

      case "PERCENT":
        if (!splits?.length) {
          throw new Error("Splits required for PERCENT split");
        }
        finalSplits = calculatePercentSplit(amount, splits);
        break;

      case "EQUAL":
      default:
        finalSplits = calculateEqualSplit(amount, group.members);
    }

    const expense = await Expense.create({
      groupId,
      description,
      amount,
      paidBy,
      splitType,
      splits: finalSplits,
    });

    for (const split of finalSplits) {
      if (split.user.toString() !== paidBy.toString()) {
        await Balance.create({
          fromUser: split.user,
          toUser: paidBy,
          amount: split.amount,
        });
      }
    }

    res.status(201).json({ success: true, data: expense });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  addExpense,
};
