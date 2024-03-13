const JWT = require("jsonwebtoken");
require("dotenv").config();

const JWT_secret = process.env.HOTELS_JWT_SECRET;

function fetchUserId(req, res, next) {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No Token Provided" });
  }
  const data = JWT.verify(token, JWT_secret);
  try {
    console.log("what is there in the data = ", data);
    res.send(data)
  } catch (error) {
    return res.status(401).send({ msg: "Invalid Token" });
  }
}

module.exports = fetchUserId
