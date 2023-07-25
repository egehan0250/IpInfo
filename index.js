const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const bodyParser = require("body-parser");

const { IPinfoWrapper } = require("node-ipinfo");

const ipinfo = new IPinfoWrapper("9e7871e3c48407");

app.get(`/`, (req, res) => {
  let ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  ipinfo.lookupIp(ip).then(async (response) => {
    res.send(response);
  });
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`)
});
