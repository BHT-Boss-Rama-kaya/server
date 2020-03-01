if (process.NODE_ENV === "development") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");
const PORT = process.env.PORT || 3000;
const logger = morgan("dev");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(logger);

app.use("/", router);
app.use(errorHandler);

app.listen(PORT, ()=> console.log(`Server up and running on PORT ${PORT}`));
