import express from "express";

const app = express(); // create the express app
const PORT = 3000; // port number

//Route
app.get("/", (req, res) => {
  res.send("<h1>Hello World<h1>");
});

app.get("/about", (req, res) => {
  res.send(
    "<p>Hi my name is Pawan Sankalpa and I'm 21 years old and learning web-development, python and Machine learning in these Days.</p>"
  );
});

app.get("/contact", (req, res) => {
    res.send(
        "<h2>My Email Adress: pawansankalpanew123@gmail.com</h2>"
    );
})

//Start the sever
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
