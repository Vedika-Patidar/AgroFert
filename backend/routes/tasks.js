const express = require("express");
const Task = require("../models/Task");
const User = require("../models/User");
const router = express.Router();

// Get all tasks with details of assignedBy and assignedTo
router.get("/tasks/:id", async (req, res) => {
  const tasks = await Task.find().populate("assignedBy assignedTo");
  res.json(tasks);
});

// Assign a task
router.post("/tasks", async (req, res) => {
  const { title, description, assignedBy, assignedTo } = req.body;

  try {
    const newTask = new Task({ title, description, assignedBy, assignedTo });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error assigning task:", error);
    res.status(400).json({ message: "Error assigning task" });
  }
});

router.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated task
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Error updating task", error: err });
  }
});


module.exports = router;
