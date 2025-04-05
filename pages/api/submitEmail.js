export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    try {
      // Send to Google Sheets via Apps Script webhook
      await fetch('https://script.google.com/macros/s/AKfycbz_6R7JU4b96TFnoHQQ1OVuzWZkmc08ckA8_ee28wi4DQoxdHF4HR4ZIFTMA5GPxSCF/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      console.log('✅ Email sent to Google Sheets:', email);

      return res.status(200).json({ message: 'Email received' });
    } catch (err) {
      console.error('❌ Error sending to Google Sheets:', err);
      return res.status(500).json({ message: 'Error storing email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
