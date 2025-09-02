const mongoose = require("mongoose");

const feedingLogSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  mealType: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner", "Snack"],
    required: true,
  },
});

module.exports = mongoose.model("FeedingLog", feedingLogSchema);
