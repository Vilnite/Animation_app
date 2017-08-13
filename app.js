var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //for .css, .js and other files to work, just place them in public folder

//ROUTES
app.get("/", function(req, res){
   res.render("landing"); 
});

app.get("/show", function(req, res){
   res.render("show"); 
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server STARTED!");
});