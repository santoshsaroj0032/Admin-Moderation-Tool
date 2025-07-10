export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Mock authentication
    // if (email === 'admin@example.com' && password === 'admin123') {
       if (email === 'santoshsaroj0032@gmail.com' && password === 'admin123') {
      res.setHeader('Set-Cookie', `adminUser=${JSON.stringify({ email, role: 'admin' })}; Path=/; HttpOnly`);
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, error: 'Invalid credentials' });
  }

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', 'adminUser=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
    return res.status(200).json({ success: true });
  }

  res.setHeader('Allow', ['POST', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}