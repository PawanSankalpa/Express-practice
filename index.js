import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hey It's Pawan")
})

app.listen(port, () => {
    console.log(`We are running on the port: ${port}`)
})