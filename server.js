var express = require('express');
var app = express();

app.get("/", function(req, res){
    var ip = req.headers["x-forwarded-for"];
    var lang = req.headers["accept-language"].split(",")[0];
    var soft = req.headers["user-agent"].split("(")[1].split(")")[0];
    
    res.send({
        ipaddress: ip, language: lang, software: soft
    });
});


app.listen(8080);