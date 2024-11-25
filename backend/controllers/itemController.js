const FoodItem = require("../models/FoodItem");

// Fetch all items
const getItems = async (req, res) => {
  try {
    const items = await FoodItem.find();
    res.json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Error fetching items" });
  }
};

// Fetch a single item by ID
const getItemById = async (req, res) => {
  try {
    const item = await FoodItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ message: "Error fetching item" });
  }
};

// Create a new item
const createItem = async (req, res) => {
  const {
    title,
    description,
    quantity,
    expirationDate,
    location,
    contactInfo,
    imageSrc,
  } = req.body;

  if (
    !title ||
    !description ||
    !quantity ||
    !expirationDate ||
    !location ||
    !contactInfo ||
    !imageSrc
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const newItem = new FoodItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error saving item:", error);
    res.status(500).json({ message: "Error saving item" });
  }
};

// Update an item by ID
const updateItem = async (req, res) => {
  try {
    const updatedItem = await FoodItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Error updating item" });
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Error deleting item" });
  }
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
