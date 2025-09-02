const Student = require("../models/studentModel");
const FeedingLog = require("../models/feedingLogModel");

// Simulate NFC wearable scan
exports.scanNFC = async (req, res) => {
  try {
    const { nfcId, mealType } = req.body;

    // Find student by NFC ID
    const student = await Student.findOne({ nfcId });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Log feeding
    const log = new FeedingLog({
      student: student._id,
      mealType,
    });
    await log.save();

    res.status(200).json({
      message: `Meal logged for ${student.name}`,
      log,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
