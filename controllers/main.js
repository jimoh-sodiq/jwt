import { BadRequest } from "../errors/index.js";
import jwt from "jsonwebtoken";

// Check if username and password in the post request
// iff exist create a new JWT
// Setup authentication so only the request with jwt can access the dashboard

export const login = async (req, res) => {
  const { username, password } = req.body;

  // body parameter validation
  // mongoose schema validation - default
  // joi package
  // manually check if valid and available

  if (!username || !password) {
    throw new BadRequest("Please provide an email and password");
  }
  // just for demo purpose
  const id = new Date().getDate();

  // use long unguessable string for the secret key

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

export const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNum = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your lucky number ${luckyNum}`,
  });
};
