// TODO npm install and require the nodemailer module

var transporter = nodemailer.createTransport({
  service: 'gmail',
  // Complete the authorization part of this code 
});

var mailOptions = {
  // TODO: Complete the following: from, to, subject, text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// TODO: in your terminal, run node emailer