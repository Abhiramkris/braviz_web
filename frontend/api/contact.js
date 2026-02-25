import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        if (!email && !phone) {
            return res.status(400).json({ error: 'Email or phone number is required' });
        }

        // Set up Nodemailer transporter using Vercel environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT, // usually 587 or 465
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Setup email data
        const mailOptions = {
            // Gmail strictly requires the exact authenticated user in the from field
            from: process.env.SMTP_USER,
            replyTo: email ? email : process.env.SMTP_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Braviz Contact Request: ${subject || 'General Inquiry'}`,
            text: `
You have received a new contact request from the Braviz website.

Name: ${name}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Message:
${message}
            `,
            html: `
<h3>New Braviz Contact Request</h3>
<p>You have received a new contact request from the Braviz website.</p>
<ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Email:</strong> ${email || 'Not provided'}</li>
    <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
    <li><strong>Subject:</strong> ${subject}</li>
</ul>
<h4>Message:</h4>
<p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        // Send mail
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return res.status(200).json({ message: 'Contact request sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error processing contact request' });
    }
}
