import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("tiny")); // helpful assistant that tells you everything your server is doing.
app.use(bodyParser.urlencoded({ extended: true }));// Parses form data from the request.

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/HomePage.html");// serve the homePage
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/signUpForm.html");// serve the form
})

app.post("/submit", (req, res) => {
  {
    const { fName, lName } = req.body;
    res.send(`<h1>Hey, are you ${fName} ${lName}</h2>`)
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
