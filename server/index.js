const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cors = require('cors')

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL);

app.use(cors())

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log("sever is running on port ", PORT);
});
