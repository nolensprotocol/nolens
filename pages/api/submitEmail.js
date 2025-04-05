import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // 1. Store in Google Sheets
    const sheetResponse = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_URL_HERE/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (!sheetResponse.ok) {
      const sheetText = await sheetResponse.text();
      console.error('Google Sheets error:', sheetText);
      return res.status(500).json({ message: 'Failed to store email in Google Sheet' });
    }

    // 2. Send welcome email
    const resendResponse = await resend.emails.send({
      from: 'team@nolens.xyz',
      to: email,
      subject: 'Welcome to Nolens 🌐',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>You're officially early 💫</h2>
          <p>Thanks for joining Nolens — a new protocol for the access-first economy.</p>
          <p>We'll reach out soon as contributor opportunities roll out.</p>
          <p>— The Nolens Team</p>
        </div>
      `,
    });

    if (resendResponse.error) {
      console.error('Resend error:', resendResponse.error);
      return res.status(500).json({ message: 'Email send failed: ' + resendResponse.error.message });
    }

    console.log('✅ Email sent and logged:', email);
    return res.status(200).json({ message: 'Email submitted successfully' });

  } catch (err) {
    console.error('❌ Unexpected server error:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
