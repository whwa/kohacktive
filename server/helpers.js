const sgMail = require('@sendgrid/mail');
var dotenv = require('dotenv');
dotenv.load();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMessage = (req, res, next) => {
  req.body.html = `${req.body.message}`;
  const msg = req.body;
  sgMail.send(msg)
  .then((data) => {
    next();
  })
  .catch((err) => {
    //if status code is 400, user error
    //if status code 500 use other service
    console.log('err', err)
  })
}

module.exports.sendMessage = sendMessage;