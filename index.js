import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan("tiny")); // helpful assistant that tells you everything your server is doing.
app.use(bodyParser.urlencoded({ extended: true })); // Parses form data from the request.

app.use(express.static(__dirname + "/public"));

// for monitoring ( to debugging, security, usage analysis, auditing)
app.use((req, res, next) => {
  const time = new Date().toISOString();
  const ip = req.id;
  const userAgent = req.get("User-Agent"); //Which browser, Which operating system, sometimes even the device type.
  const path = req.originalUrl;
  console.log(`[${time}] ${ip} ${userAgent} accessed ${path}`);
  next();
});
//-----------------------------------------------------------------------//

// self created middleware logIn- to check if the client is the admin.
function logIn(req, res, next) {
  const { username, password } = req.body;
  const adminDetails = { username: "Pawan", password: "stupidDonkey" };

  // coding step by step is to be clear. otherwise can use ternary operators
  if (username === adminDetails.username && password === adminDetails.password) {
    next(); //let the admin in
  } else {
    res.sendFile(__dirname + "/public/userPage.html"); //serve the userPage
  }
}
//----------------------------------------------------------------------//

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/HomePage.html"); // serve the homePage
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/signUpForm.html"); // serve the Sign in form
});

app.post("/admin", logIn, (req, res) => {
  {
    res.sendFile(__dirname + "/public/adminPage.html"); // serve the adminPage
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
