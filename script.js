const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middleware chalao");
  next();
});
app.get("/", function (req, res) {
  res.send("aree tu toh mast hai!");
});

app.get("/about", function (req, res) {
  res.send("aree tu toh aur bhi mast hai! woh toh tu hai");
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
