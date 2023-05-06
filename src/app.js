const express = require ("express");
const app = express ();
const path = require("path");
const port = process.env.PORT || 3001;
// require("./db/corn")
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../views");


app.use(express.static(static_path));
app.set("View engine","hbs");
app.set("Views", template_path);
//hbs.registerPartials(partials_path)

app.get("/", (req,res) => {
res.render("index")

});

app.get("/register",(req,res) => {
    res.render("register");
})

app.listen(port, () => {


    console.log('Sever is running');
})