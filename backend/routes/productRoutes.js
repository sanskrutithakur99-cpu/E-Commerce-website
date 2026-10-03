const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

// Add a product
router.post("/", async (req, res) => {
  try {
    const { name, price, description, image, category } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      image,
      category,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add product",
    });
  }
});
router.post("/seed", async (req, res) => {
  try {
    const products = [
      {
        name: "Classic Sneakers",
        price: 1999,
        description: "Comfortable and stylish everyday sneakers.",
        image: "https://images.unsplash.com/1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
        category: "Footwear",
      },
      {
        name: "Wireless Headphones",
        price: 2499,
        description: "Premium wireless headphones with clear sound.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
        category: "Electronics",
      },
      {
        name: "Smart Watch",
        price: 3999,
        description: "Smart watch with modern features and stylish design.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
        category: "Electronics",
      },
      {
        name: "Everyday Backpack",
        price: 1299,
        description: "Spacious and durable backpack for everyday use.",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
        category: "Bags",
      },
    ];

    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(products);

    res.json({
      message: "Products added successfully",
      products: createdProducts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to seed products",
    });
  }
});

module.exports = router;