const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Help me, I am under the water");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});
