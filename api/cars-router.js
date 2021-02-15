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
router.post("/", async (req, res) => {
  const newCar = req.body;
  if (!newCar.make || !newCar.model || !newCar.VIN) {
    res
      .status(404)
      .json({ message: "Please include make, model and VIN to add a car" });
  } else {
    try {
      const car = await Cars.add(newCar);
      res.status(201).json(car);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

module.exports = router;
