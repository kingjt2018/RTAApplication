var http = require("http");
var parser = require("./InfoParser.js");
var qs = require("querystring");
var fs = require("fs");
//Open Server
var server = http.createServer( function(req,res){
  var body = "";
  if(req.method == "POST"){
    console.log("POST Received");
    //Receive Application Data
    req.on("data", function(data){
      body += data;
      //console.log("FirstName: " + data.body.firstName);
      //console.log("First body: "+body);
    });

    req.on("end",function(data){
      body += data;
      var info = qs.parse(body);
      parser.collectInfo(info);
      parser.writeToFile();
      //parser.sendEmails();
    });
    //Respond with follow up page
    fs.readFile(__dirname+"/../FollowUpPage.html",function(err,data){
      if(err){
        console.log(err);
      }
      else{
      res.writeHead(200,{"Content-Type": "text-html"});
      res.end(data);
    }
    });
  }
});

port = 5488;
host = "152.117.219.199";
server.listen(port,host);
console.log("Listening at http://"+host+":"+port);
