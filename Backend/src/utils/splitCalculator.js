const calculateEqualSplit = (amount, members) => {
  const splitAmount = amount / members.length;

  return members.map((user) => ({
    user,
    amount: splitAmount,
  }));
};

const calculateExactSplit = (amount, splits) => {
  const total = splits.reduce((sum, s) => sum + s.amount, 0);

  if (total !== amount) {
    throw new Error("Exact split amounts do not sum to total expense");
  }

  return splits;
};

const calculatePercentSplit = (amount, splits) => {
  const percentTotal = splits.reduce((sum, s) => sum + s.percent, 0);

  if (percentTotal !== 100) {
    throw new Error("Percentages must sum to 100");
  }

  return splits.map((s) => ({
    user: s.user,
    amount: (s.percent / 100) * amount,
  }));
};

module.exports = {
  calculateEqualSplit,
  calculateExactSplit,
  calculatePercentSplit,
};
