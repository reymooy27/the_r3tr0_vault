const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
    res.render("index", {
        title: 'nama'
    });
});

app.get('/registration', (req, res) => {
    res.render('registration');
})

//port
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listen to port ${port}`);