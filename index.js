import express from "express";

import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/abhijit", (req, res) => {
  res.sendFile(process.cwd() + "/index2.html");
});

app.get("/abhijit1", (req, res) => {
  res.sendFile(process.cwd() + "/index3.html");
});

app.get("/abhijit2", (req, res) => {
  res.sendFile(process.cwd() + "/index4.html");
});
//backened code which is inserted in server to post the get request...
app.post("/", (req, res) => {
  var first = Number(req.body.n1);
  var second = Number(req.body.n2);
  var result = first - second;
  res.send("THE VALUE WILL BE   " + result);
});

app.get("/ranjan", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(3000, () => {
  console.log("server is ok and is currently running there");
});

// ending the code ...........
