var mailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var info = require("./InfoParser.js");
var Emailer= {
sendEmail: function(email,name,file){

var transporter = mailer.createTransport(smtpTransport({
  service: "someService (gmail,hotmail,etc.)",
  auth: {
    user: "Email-to-send-from@someEmail.com",
    pass: "actualPasswordForEmailAbove"
}}));

var options = {
  from: "Email-to-send-from@someEmail.com",
  to: email,
  subject: "RTA Application Confirmation",
  text: name+", \n Thank you for applying to RTA! We have received your application and our team will review your application as soon as possible and will get back to you soon!\n -RTA Hiring Team",
  /*Could send the application file to current employee for review
  attachments: [
    {
    filename: "*ApplicantName*Application.txt",
    contents: file
  }
]*/
}

transporter.sendMail(options, function(error, info){
  if(error){
    console.log(error);
  }
  else{
    console.log("Email Succesfully sent"+info.response);
  }
});
}
}
module.exports = Emailer;
