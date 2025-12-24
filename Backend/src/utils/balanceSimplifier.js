const simplifyBalances = (balances) => {
  const net = {};

  // Step 1: compute net balance
  for (let bal of balances) {
    const from = bal.fromUser.toString();
    const to = bal.toUser.toString();

    net[from] = (net[from] || 0) - bal.amount;
    net[to] = (net[to] || 0) + bal.amount;
  }

  const debtors = [];
  const creditors = [];

  // Step 2: separate users
  for (let user in net) {
    if (net[user] < 0) {
      debtors.push({ user, amount: -net[user] });
    } else if (net[user] > 0) {
      creditors.push({ user, amount: net[user] });
    }
  }

  const result = [];

  // Step 3: greedy settlement
  let i = 0, j = 0;

  while (i < debtors.length && j < creditors.length) {
    const min = Math.min(debtors[i].amount, creditors[j].amount);

    result.push({
      from: debtors[i].user,
      to: creditors[j].user,
      amount: min,
    });

    debtors[i].amount -= min;
    creditors[j].amount -= min;

    if (debtors[i].amount === 0) i++;
    if (creditors[j].amount === 0) j++;
  }

  return result;
};

module.exports = simplifyBalances;
