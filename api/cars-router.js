const express = require("express");

const router = express.Router();

//bring in the model file
const Cars = require("./cars-model");

router.get("/", async (req, res) => {
  try {
    const cars = await Cars.get();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
});
//router.post()

module.exports = router;
