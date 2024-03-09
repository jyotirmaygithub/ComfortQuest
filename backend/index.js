const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); // we are using middleware to convert raw json data into js object. 

// available routes in the project
app.use("/api/auth", require("./routes/auth"));
app.use("/api/forgetpass", require("./routes/forgetpass"));

app.listen(port, () => {
  console.log(`hotel-backend is working on port number :  ${port}`);
});
