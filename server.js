const express = require("express");
const helmet = require("helmet");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();
const port = process.env.PORT || 4001;

app.use(helmet());
app.use(history());
app.use(express.static(path.join(__dirname, "./dist")));

app.listen(port);

console.log(`app is listening on port: ${port}`);
