const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'taskr@kaewell.com',
    subject: 'Welcome to Taskr!',
    text: `Welcome to Taskr, ${name}. Enjoy the application.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'taskr@kaewell.com',
    subject: 'Account Deleted',
    text: `Your account has been deleted ${name}.  We hope you enjoyed the application.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
