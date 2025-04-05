// pages/api/submitEmail.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // ✅ This is where you can save to a database or send to an email provider
    console.log('New contributor email:', email);

    return res.status(200).json({ message: 'Email received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
