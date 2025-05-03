import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { urlencoded } = bodyParser;

const app = express();
const port = 3000;

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

//create my own middleware
function logTime(req, res, next){
  console.log(`Time: ${new Date().toLocaleDateString()}`);
  next();
}

app.use(logTime)

// create a middleware with conditions
function guard(req, res, next){
  const secretKey = req.query.secrets;
  if (secretKey === "studpidDonkey"){
    next(); // Let him in
  } else {
    res.send("<h>Access denied</h1>");
  }
}

app.get("/protected", guard, (req, res) => {
  res.send("You are inside the secret page of the Stuupid Donkey.")
});
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   console.log(req.body);
// });

app.get("/", (req, res) => {
  res.send("Hey It's Pawan from the Home Page");
});


app.listen(port, () => {
  console.log(`We are running on the port: ${port}`);
});
