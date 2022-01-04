const sendmail = require('../util/sendmail');

exports.sendEmail = async (req, res, next) => {

    const { email, message } = req.body;

    await sendmail({
        email: email,
        subject: 'Hello this is an email from API',
        message
    })
    res.status(200).json({
        success: true,
        message: `Email sent to: ${email}`
    })
}