const express = require("express");

const app = express();

const port = process.env.PORT || 9001;
app.listen(port);

console.log("epxress app listening on port ${port}");
