var PythonShell = require('python-shell');
var path = require('path');

var user = function(username, password){
  this.username = username;
  this.password = password;
};


user.prototype.printMsg = function() {
  console.log("This is a message from the demo package");
}

user.prototype.sendEmail = function(data, callback){
  var msg = {status:'success'};
  var emailSendTo = data.emailSendTo;
  var emailMsg = data.emailMsg;
  var emailSubject = data.emailSub;
  var options = {
    args: [emailSendTo, emailSubject, emailMsg, this.username, this.password]
  };
  console.log('option for sending email: ', options);
  var sendEmailFile = path.join(__dirname, 'sendemail.py');
  console.log('python script name: ', sendEmailFile);
  PythonShell.run(sendEmailFile, options, function (err) {
    if (err){
      console.log('Error while sending email: ', err);
      callback(err);
    } 
    console.log('finished');
    callback(null, msg);
  });
};

exports = module.exports = user;
