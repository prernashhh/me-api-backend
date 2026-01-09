const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true }
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    links: { type: [linkSchema], default: [] }
  },
  { _id: false }
);

const workSchema = new mongoose.Schema(
  {
    company: { type: String, trim: true },
    role: { type: String, trim: true },
    duration: { type: String, trim: true }
  },
  { _id: false }
);

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, trim: true },
    degree: { type: String, trim: true },
    year: { type: String, trim: true }
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true },

    title: { type: String, trim: true },
    description: { type: String, trim: true },
    location: { type: String, trim: true },
    yearsOfExperience: { type: Number, min: 0 },

    skills: { type: [String], default: [] },

    education: { type: [educationSchema], default: [] },
    work: { type: [workSchema], default: [] },
    projects: { type: [projectSchema], default: [] },

    links: {
      github: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      portfolio: { type: String, trim: true }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Profile", profileSchema);
