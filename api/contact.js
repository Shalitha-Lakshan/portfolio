const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed.' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing required fields.' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.TO_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass || !toEmail) {
    return res.status(500).json({ ok: false, message: 'Server email is not configured.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : true,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: subject || 'New portfolio message',
      text: `From: ${name} <${email}>\n\n${message}`
    });

    return res.status(200).json({ ok: true, message: 'Message sent.' });
  } catch (error) {
    console.error('SMTP send failed.', error);
    return res.status(500).json({ ok: false, message: 'Failed to send message.' });
  }
};
