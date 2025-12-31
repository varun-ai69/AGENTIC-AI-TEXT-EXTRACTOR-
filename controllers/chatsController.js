const QuizHistory = require("../models/quizHistory");

const getAllChats = async (req, res) => {
  try {
    const userId = req.user.id;

    // pagination params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalChats = await QuizHistory.countDocuments({ user: userId });

    const chats = await QuizHistory.find({ user: userId })
      .select("_id title createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      totalChats,
      currentPage: page,
      totalPages: Math.ceil(totalChats / limit),
      chats
    });

  } catch (error) {
    console.error("Fetch Chats Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllChats };
