const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, required: true },
  imageSrc: { type: String, required: true },
});

module.exports = mongoose.model("FoodItem", FoodItemSchema);
