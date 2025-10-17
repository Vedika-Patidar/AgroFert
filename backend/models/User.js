const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: {
    type: String,
    enum: ["CEO", "Head", "Employee", "Customer", "Accountant" ],
    required: true,
  },
});

// Pre-save middleware to ensure only one CEO exists in the system
userSchema.pre("save", async function (next) {
  if (this.role === "CEO") {
    const existingCeo = await mongoose.model("User").findOne({ role: "CEO" });
    if (existingCeo && existingCeo._id !== this._id) {
      const error = new Error("There can only be one CEO.");
      return next(error); // Stop the save operation if a CEO already exists
    }
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
