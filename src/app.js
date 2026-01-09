const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));

const healthRoutes = require("./routes/health.routes");
const profileRoutes = require("./routes/profile.routes");

app.use(healthRoutes);
app.use(profileRoutes);

module.exports = app;
