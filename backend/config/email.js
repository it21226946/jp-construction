import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection configuration only if credentials are provided
// This runs asynchronously and won't block server startup
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter.verify(function (error, success) {
    if (error) {
      // Only log a brief warning, not the full error stack
      if (error.code === 'EAUTH') {
        console.log('⚠️  Email authentication failed. Email notifications will be disabled.');
        console.log('📝 To fix: Use an App Password (not your regular Gmail password)');
        console.log('   See: https://support.google.com/accounts/answer/185833');
      } else {
        console.log('⚠️  Email configuration error:', error.message);
        console.log('⚠️  Email notifications will be disabled.');
      }
    } else {
      console.log('✅ Email server is ready to send messages');
    }
  });
} else {
  console.log('ℹ️  Email credentials not configured. Email notifications will be disabled.');
  console.log('📝 To enable emails, set EMAIL_USER and EMAIL_PASS in your .env file');
}

export const sendContactNotification = async (contactData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('⚠️  Email not configured. Skipping email notification.');
    return { success: false, message: 'Email not configured' };
  }

  const { name, email, phone, projectType, message } = contactData;

  const projectTypeMap = {
    residential: '住宅解体 / Residential',
    commercial: '商業施設解体 / Commercial',
    industrial: '工業施設解体 / Industrial',
    emergency: '緊急対応 / Emergency',
    '': '未指定 / Not Specified'
  };

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `【お問い合わせ】新しいお見積り依頼 / New Contact Inquiry - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #14b8a6 0%, #f97316 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #14b8a6; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #14b8a6; }
          .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>新しいお問い合わせ / New Contact Inquiry</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">お名前 / Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">メールアドレス / Email</div>
              <div class="value">${email}</div>
            </div>
            ${phone ? `
            <div class="field">
              <div class="label">電話番号 / Phone</div>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">プロジェクトタイプ / Project Type</div>
              <div class="value">${projectTypeMap[projectType] || projectType || '未指定 / Not Specified'}</div>
            </div>
            ${message ? `
            <div class="field">
              <div class="label">詳細・ご要望 / Details & Requirements</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">受信日時 / Received At</div>
              <div class="value">${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</div>
            </div>
          </div>
          <div class="footer">
            <p>このメールは自動送信されています。返信は上記のメールアドレスへ直接お送りください。</p>
            <p>This is an automated email. Please reply directly to the email address above.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
新しいお問い合わせ / New Contact Inquiry

お名前 / Name: ${name}
メールアドレス / Email: ${email}
${phone ? `電話番号 / Phone: ${phone}` : ''}
プロジェクトタイプ / Project Type: ${projectTypeMap[projectType] || projectType || '未指定 / Not Specified'}
${message ? `詳細・ご要望 / Details:\n${message}` : ''}

受信日時 / Received At: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    `.trim(),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact notification email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    // Log error but don't expose full stack trace for auth errors
    if (error.code === 'EAUTH') {
      console.error('❌ Email authentication failed. Check your EMAIL_USER and EMAIL_PASS in .env');
      console.error('   Tip: Gmail requires an App Password, not your regular password');
    } else {
      console.error('❌ Error sending contact notification email:', error.message);
    }
    return { success: false, error: error.message };
  }
};

export default transporter;

