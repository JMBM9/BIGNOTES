// dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//express app use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//route path
let apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);
let htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

//app listener
app.listen(PORT, () => console.log(`now using: ${PORT}`));