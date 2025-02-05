const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Or your preferred email service
    secure:true,
    port:465,
    auth: {
        user: process.env.SUPER_USER_EMAIL,
        pass: process.env.SUPER_USER_PASSWORD,
    },
});

module.exports.pushEmailToAdmin = async ({sender,reciver,subject,message}) => {
    try { 
       
        // Send email
        const mailOptions = {
            from: 'ashishalhat8@gmail.com',
            to: reciver,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return ;
    } catch (err) {
        return err
    }
}

module.exports.SendEmail = async ({sender,reciver,subject,message}) => {
    try { 
       
        // Send email
        const mailOptions = {
            from: sender,
            to: reciver,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return ;
    } catch (err) {
        return err
    }
}