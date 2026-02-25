require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function send() {
    try {
        const info = await transporter.sendMail({
            from: `"Braviz Website" <${process.env.SMTP_USER}>`, // EXACT match to authenticated user
            replyTo: "customer@example.com",                     // Put the customer email here instead
            to: process.env.RECEIVER_EMAIL,
            subject: "Braviz SMTP Delivery Test",
            text: "This is a test to verify SMTP delivery without from-address spoofing."
        });
        console.log('Test message sent:', info.messageId);
    } catch (err) {
        console.error('Test failed:', err);
    }
}

send();
