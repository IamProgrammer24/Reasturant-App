const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

//dot en configuration
dotenv.config();

//DB connection
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
// URL => http://localhost:8080
app.use("/", require("./routes/testRouters"));
app.use("/", require("./routes/authRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/resturant", require("./routes/reasturantRoutes"));
app.use("/category", require("./routes/categoryRoutes"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

//PORT
const port = process.env.PORT || 5000;

//listen
app.listen(port, () => {
  console.log(`Server running on ${port}`.white.bgMagenta);
});
