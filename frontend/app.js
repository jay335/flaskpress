require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;
        await axios.post(`${BACKEND_URL}/submit`, { name, email });
    res.send("CI/CD SUCCESS: Express app redeployed");
  } catch (err) {
    res.send("Error submitting data to backend");
    console.error("Error submitting data:", err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://0.0.0.0:${PORT}`);
});

