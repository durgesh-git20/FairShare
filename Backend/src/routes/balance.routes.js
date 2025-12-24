const express = require("express");
const router = express.Router();

const {
  getUserBalances,
  getSimplifiedBalances,
} = require("../controllers/balance.controller");

router.get("/:userId", getUserBalances);
router.get("/", getSimplifiedBalances);

module.exports = router;
