const express = require("express");

const app = express();

// middleware
app.use(express.json());

// test route
app.use("/api/users", require("./routes/user.routes"));

app.use("/api/groups", require("./routes/group.routes"));

app.use("/api/expenses", require("./routes/expense.routes"));

app.use("/api/balances", require("./routes/balance.routes"));

app.get("/", (req, res) => {
  res.send("Expense Sharing Backend is running 🚀");
});

module.exports = app;
