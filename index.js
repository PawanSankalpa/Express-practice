import express from "express";

const app = express(); // create the express app
const PORT = 3000; // port number

//Route
app.get("/", (req, res) => {
  res.send("Hello, Pawan");
});

//Start the sever
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});