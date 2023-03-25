const express = require("express");

const app = express();


// Use "/" to specify that you are in the home page

app.get("/", function(request, response){
    // console.log(request);
    response.send("Hi There");
})

app.get("/Contacts", function(req, res){
    res.send("You can contact me on: Naji@gamil.com");
})

app.get("/about", function(req, res){
    res.send("Hi, I am made this server, who are you");
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>code</li><li>Footbal</li><li>Reading</li></ul>");
    
})

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});