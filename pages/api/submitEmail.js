import { Resend } from 'resend';
import fetch from 'node-fetch'; // ✅ add this line

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    try {
      // Save to Google Sheet
      await fetch('https://docs.google.com/spreadsheets/d/13Ea_IPI16Rb6kFoaYRUIxwBaSTgs-C2dVTTbUHje9lY/edit?gid=0#gid=0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      // Send welcome email
      await resend.emails.send({
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
        `,
      });

      console.log('✅ Email stored & welcome email sent to:', email);
      return res.status(200).json({ message: 'Email received and welcome sent' });

    } catch (err) {
      console.error('❌ Error in contributor flow:', err);
      return res.status(500).json({ message: 'Internal error' });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
