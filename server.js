const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
dotenv.config();

connectDB() //use to connect DB 

dotenv.config();

const app = express();


app.use(express.json());


const quizRoutes = require("./routes/quizRoutes");
const authRoutes = require("./routes/authRoutes")
app.use("/api/quiz", quizRoutes);
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
