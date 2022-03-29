const express = require("express");

const apiRoutes = require("./routes/api_routes.js");
const htmlRoutes = require("./routes/html_routes.js");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
