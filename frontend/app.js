const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", async (req, res) => {
  try {
    const { name, email } = req.body;
    await axios.post("http://backend-flaskpress:5000/submit", { name, email });
    res.send("Data submitted successfully");
  } catch (err) {
    res.send("Error submitting data to backend");
    console.error("Error submitting data:", err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running at http://localhost:${PORT}`);
});
