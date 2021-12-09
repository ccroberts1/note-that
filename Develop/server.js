const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

//MIDDLEWARE
//Boilerplate for express for data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Check public folder first
app.use(express.static("public"));
//Provides access to routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
