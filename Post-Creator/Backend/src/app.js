const express = require("express")
const cookieParser = require("cookie-parser")
const authrouter = require("./routes/auth.routes")
const postrouter = require("./routes/post.routes")
const followrouter = require('./routes/follow.model')
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    credentials: true,
    origin: "https://post-creation-un36.onrender.com",
  }),
);
app.use(express.static("./public"))

app.use("/api/auth",authrouter)
app.use("/api/posts",postrouter)
app.use("/api/user", followrouter)


module.exports = app