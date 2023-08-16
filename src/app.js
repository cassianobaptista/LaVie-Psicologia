const express = require("express");
const routes = require("./routes/index");
const handleError = require("./middlewares/handleError");
const db = require("./database/index");
const app = express();

db.hasConnection();

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(3000, () => console.log("Server running on port 3000"));