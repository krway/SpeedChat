const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const expressAsyncHandler = require("express-async-handler");
const User = require("./Models/UserModel");
const generateToken = require("./config/genrateToken");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
const port = process.env.PORT;
console.log(port);

connectDB();
app.use(express.json());
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.use("/api/user", userRoutes);
