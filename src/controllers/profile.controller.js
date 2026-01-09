const Profile = require("../models/profile.model");

// GET /me
const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

// POST /me
const createProfile = async (req, res) => {
  try {
    const existingProfile = await Profile.findOne();
    if (existingProfile) {
      return res.status(409).json({ message: "Profile already exists" });
    }

    const profile = new Profile(req.body);
    await profile.save();

    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ message: "Failed to create profile" });
  }
};

// PUT /me
const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      {},
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: "Failed to update profile" });
  }
};

// DELETE /me
const deleteProfile = async (req, res) => {
  try {
    const deletedProfile = await Profile.findOneAndDelete({});

    if (!deletedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete profile" });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
};
