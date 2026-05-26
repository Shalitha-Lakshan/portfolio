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

  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || 'New portfolio message');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

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
      subject: `Portfolio Contact: ${subject || 'New message'}`,
      text: `From: ${name} <${email}>\nSubject: ${subject || 'New message'}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 12px;">New Portfolio Message</h2>
          <p style="margin: 0 0 16px; color: #334155;">
            You received a new message from your portfolio contact form.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 120px;">Subject:</td>
              <td style="padding: 8px 0;">${safeSubject}</td>
            </tr>
          </table>
          <div style="padding: 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
            ${safeMessage}
          </div>
        </div>
      `.trim()
    });

    return res.status(200).json({ ok: true, message: 'Message sent.' });
  } catch (error) {
    console.error('SMTP send failed.', error);
    return res.status(500).json({ ok: false, message: 'Failed to send message.' });
  }
};
