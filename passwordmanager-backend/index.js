const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const cors = require("cors");
const port = process.env.PORT;

app.use(cors());
app.use("/api/v1", require("./routes/apiv1"));

app.listen(port, () => {
  console.log(`App started and listening on port ${port}`);
});
