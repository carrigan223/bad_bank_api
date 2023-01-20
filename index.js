//bring in expres from express
const express = require("express");

//create an instance of express
const app = express();

//create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//create a port

//listen to the port
app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
