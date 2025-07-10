export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Mock authentication
    if (email === 'admin@example.com' && password === 'admin123') {
      res.setHeader('Set-Cookie', [
        `adminUser=${JSON.stringify({ email, role: 'admin' })}; Path=/; HttpOnly; SameSite=Lax; Secure=${process.env.NODE_ENV === 'production'}`,
        `adminAuth=true; Path=/; SameSite=Lax; Max-Age=${60 * 60 * 24}`
      ]);
      return res.status(200).json({ email, role: 'admin' });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}