const express = require("express");
const router = express.Router();
const path = require("path");
//getting note files
router.get("./notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
//module exports
module.exports = router;