
var fs = require("fs");
var Emailer = require("./Emailer.js");



var form = {
  "firstName": "",
  "lastName": "",
  "email": "",
  "phoneNumber":"",
  "referral": "",
  "transportation": "",
  "yearInSchool": "",
  "highSchool": "",
  "graduationYear":"",
  "fallSports":"",
  "winterSports":"",
  "springSports":"",
  "currentCollege":"",
  "major":"",
  "minor":"",
  "collegeActivities":"",
  "seasonsAvailable":"",
  "workAllEvents":"",
  "preOrderAvailability":"",
  "sportPreference": "",
  "workPreference":"",
  "training":""
};
var file = "";
var parser = {
sendEmails: function(){
  Emailer.sendEmail(form.email,form.firstName,file);
},
writeToFile: function(){
  console.log("Writing to file at: "+file);
  var sw = fs.createWriteStream(file);
  sw.once("open", function(fd){
    sw.write(form.firstName + " "+form.lastName+"\n");
    sw.write("Email: "+form.email+"\n");
    sw.write("Phone Number: "+form.phoneNumber+"\n");
    sw.write("Referral Type: "+form.referral+"\n");
    sw.write("Transportation: "+form.transportation+"\n");
    sw.write("Current College and year: "+form.currentCollege+ " "+form.yearInSchool+"\n");
    sw.write("Major/Minor: "+form.major+"/"+form.minor+"\n");
    sw.write("College Activites: "+form.collegeActivities+"\n");
    sw.write("Highschool/GradYear: "+form.highSchool+"/"+form.graduationYear+"\n");
    sw.write("Highschool Activities: \nFall Activities: "+form.fallSports+"\n");
    sw.write("Winter Activities: "+form.winterSports+"\n");
    sw.write("Spring Activities: "+form.springSports+"\n");
    sw.write("Seasons Available: " + form.seasonsAvailable+"\n");
    sw.write("Wants to work all events: "+form.workAllEvents+"\n");
    sw.write("Can work pre/post event orders: "+form.preOrderAvailability+"\n");
    sw.write("Individual or team sport preference: "+ form.sportPreference+"\n");
    sw.write("Sales or Pressing preference: "+form.workPreference+"\n");
    sw.write("Willing to train: "+form.training+"\n");
    sw.end();
  });
},
collectInfo:function(info){
  console.log("Collecting");
  form.firstName =  info.firstName;
  form.lastName = info.lastName;
  form.email = info.Email;
  form.phoneNumber = info.PhoneNumber;
  form.referral = info.ref;
  form.transportation = info.transportation;
  form.yearInSchool = info.YearInSchool;
  form.highSchool = info.HighSchoolAttended;
  form.graduationYear = info.GradYear;
  form.fallSports = info.fallSports;
  form.winterSports = info.winterSports;
  form.springSports = info.springSports;
  form.currentCollege = info.collegeAttended;
  form.major = info.major;
  form.minor = info.minor;
  form.seasonsAvailable = info.availability;
  form.workAllEvents = info.AllEvents;
  form.preOrderAvailability = info.PreEvents;
  form.sportPreference = info.sportPreference;
  form.workPreference = info.workPreference;
  form.training = info.Training;
  form.collegeActivities = info.collegeActivities;
  file = __dirname+"/Output/"+form.firstName+form.lastName+"Application.txt"
}
}
module.exports = parser;
