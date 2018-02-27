const path = require("path");
const express = require("express");

const publicPath = path.join(__dirname,"../public")


const app = express();
var port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/",(req, res) => {

    //res.send("<h1>Hello Express!</h1>");
    res.send("/index.html")
});



app.listen(port,() => {
    console.log(`Server running on port: ${port}`)
})