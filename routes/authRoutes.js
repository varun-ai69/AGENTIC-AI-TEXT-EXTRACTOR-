// routes/authRoutes.js
const router = require("express").Router();
const { register, login, changePassword } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
// router.put("/change-password", authMiddleware, changePassword);

module.exports = router;
