import { Resend } from 'resend';
import fetch from 'node-fetch';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    try {
      // ✅ Save email to Google Sheets
      const sheetRes = await fetch('https://script.google.com/macros/s/AKfycbx3YrM2Sf1vOV4BRq94vJQUoILdeN3-sy58JsrahT12NPAR2UkFssx8dqFrJi1HpTCW/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!sheetRes.ok) {
        console.error('❌ Google Sheets response not OK:', sheetRes.status);
        throw new Error('Failed to save to Google Sheets');
      }
      /*
      // ✅ Send welcome email via Resend
      const emailRes = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome to Nolens 🌌',
        html: `
          <div style="font-family: sans-serif; line-height: 1.5;">
            <h2>Welcome to Nolens 🏡</h2>
            <p>You're now part of a growing movement that's rethinking ownership, access, and coordination.</p>
            <p>We'll keep you updated on how you can contribute to the protocol and shape the future of the access-first economy.</p>
            <p>— The Nolens Team</p>
          </div>
        `
      });
      */

      console.log('✅ Email stored in sheet & welcome email sent:', email);
      return res.status(200).json({ message: 'Email received and welcome sent' });

    } catch (err) {
      console.error('❌ Error in contributor flow:', err.message, err.stack);
      return res.status(500).json({ message: 'Internal error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
