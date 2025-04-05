export default function handler(req, res) {
  console.log('GET HIT ✅');
  res.status(200).json({ message: 'This is the email API route' });
}
