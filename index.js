import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hey It's Pawan from the Home Page")
})

app.get("/about", (req, res) => {
    res.send("Hey It's Pawan from the about page")
})

app.get("/contact", (req, res) => {
    res.send("Hey It's Pawan from the contact page")
})

app.listen(port, () => {
    console.log(`We are running on the port: ${port}`)
})