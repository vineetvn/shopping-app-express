const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send("add-product");
});

router.post("/product", (req, res) => {
  res.send("product");
});

module.exports = router;
