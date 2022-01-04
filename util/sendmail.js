const nodemailer = require('nodemailer');

const sendmail = async options => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b4ed4bd2d28a7d",
          pass: "7d7f6fefb33bad"
        }
      });

      const message = {
        from: "no-reply@testapi.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transport.sendMail(message);

}

module.exports = sendmail;