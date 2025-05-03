import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey It's Pawan from the Home Page");
});

app.get("/about", (req, res) => {
  res.send("Hey It's Pawan from the about page");
});

app.get("/contact", (req, res) => {
  res.send("Hey It's Pawan from the contact page");
});

// other type of requests

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/pawan", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/pawan", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/pawan", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`We are running on the port: ${port}`);
});
