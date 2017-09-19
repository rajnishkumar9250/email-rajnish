# email-rajnish
A very simple email node module

Very simple and easy node_module to send email to any email_server.

How to use:


var emailRajnish = require('email-rajnish');

emailRajnish = new emailRajnish(emailId, password);

where emailId is email id of your email account
password is password of your email account

var options = {
                emailSendTo: 'receiver email id',
                emailMsg: ' Email content',
                emailSub: 'Subject of email'
              };


emailRajnish.sendEmail(options, function(err, msgData){
    if(err){
      throw new Error(err);
    }else{
      res.json({msg:msgData});
    }
  });
