export default function handler(req, res) {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', [
      'adminUser=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
      'adminAuth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
    ]);
    return res.status(200).json({ success: true });
  }
  
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}