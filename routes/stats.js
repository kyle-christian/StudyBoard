const express = require("express");
const router = express.Router();
const statsController = require("../controllers/stats");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/createStat", statsController.createStat);
router.put("/updateStat", statsController.updateStat);

module.exports = router;
