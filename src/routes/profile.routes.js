const express = require("express");
const router = express.Router();

const {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
  getProjectsBySkill
} = require("../controllers/profile.controller");

router.get("/me", getProfile);
router.post("/me", createProfile);
router.put("/me", updateProfile);
router.delete("/me", deleteProfile);
router.get("/projects", getProjectsBySkill);

module.exports = router;
