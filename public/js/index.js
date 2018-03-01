var socket = io();
    socket.on("connect", function(){
        console.log("connected to server");
    })

    socket.on("disconnect", function(){
        console.log("disconnected to server");
        
    })

    socket.on("newMessage",function(message){
        console.log("New message", message);
        var li = $("<li></li>");
        li.text(`${message.from}: ${message.text}`);
        $("#messageList").append(li);
    })

    socket.emit("createMessage", {
        from:"Joshy",
        text:"Hi"
    }, function(x){
        console.log(x)
    });

    $("#mess").on("submit", function(e){
        e.preventDefault();
        socket.emit("createMessage", {
            from:"User",
            text: $("#messageInp").val()
        },function(x){
            console.log(x)
        })
    })