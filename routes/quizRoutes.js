const express = require("express");
const router = express.Router();

const { generateQuiz } = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");
const { getAllChats } = require("../controllers/chatsController")


router.post("/generate", authMiddleware, generateQuiz); 
router.get("/chats", authMiddleware, getAllChats);



module.exports = router;
