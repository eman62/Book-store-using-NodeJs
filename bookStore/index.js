require("dotenv").config();
require("./db")
const mongoose = require("mongoose");
const express = require("express");
const cors=require("cors")
const app = express();
const userRouter = require("./routes/user.router");
const bookRouter=require("./routes/book.router")
const auth = require("./middleware/auth");


app.use(express.json());
app.use(cors())

app.use(express.static("public"));
app.get("/Welcome", (req, res) => {
  res.render("index", { title: "WELCOME TO EJS", message: "HELLO ITI!" });
});

app.get("/try-redirect", (req, res) => {
  res.redirect("/about.html");
});

app.use("/api/users", userRouter);


app.use(auth)
app.use("/api/books",bookRouter);

const port = process.env.port || 3000;

mongoose.connection.once("open", () => {
  console.log("Now connection in dataBase");
  app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);
  });
});


