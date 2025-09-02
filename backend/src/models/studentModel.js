const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nfcId: {
    type: String,
    required: true,
    unique: true, // Each wearable is unique
  },
  classLevel: {
    type: String,
  },
  parentContact: {
    type: String,
  },
});

module.exports = mongoose.model("Student", studentSchema);
