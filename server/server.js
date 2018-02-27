const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname,"../public")
const app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) =>{
    console.log("New user connected");

    socket.on("createMessage",(newMessage) =>{
        console.log("Message received", newMessage);
        io.emit("newMessage", {
            from:newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        })
    })

socket.on("disconnect", () =>{
    console.log("User disconnected");
    })

})
app.get("/",(req, res) => {

    //res.send("<h1>Hello Express!</h1>");
    res.send("/index.html")
});



server.listen(port,() => {
    console.log(`Server running on port: ${port}`)
})