const express = require("express");
const router = express.Router();
const { scanNFC } = require("../controllers/nfcController");

// POST: Scan NFC and log feeding
router.post("/scan", scanNFC);

module.exports = router;
