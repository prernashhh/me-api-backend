const express = require("express");
const router = express.Router();

const {
  getProfile,
  createProfile
} = require("../controllers/profile.controller");

router.get("/me", getProfile);
router.post("/me", createProfile);

module.exports = router;
