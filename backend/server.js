const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//미들웨어
app.use(cors());
app.use(express.json());

//라우터연결
const chatbotRoutes = require("./routes/chatbotRoutes");
app.use("/chat", chatbotRoutes);

//서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});