const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("Router route");
});
router.get("/my-home", (req, res) => {
  res.send("You are in my home");
});
module.exports = router;
