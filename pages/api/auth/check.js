export default function handler(req, res) {
  if (req.method === 'GET') {
    const cookie = req.cookies.adminUser;
    if (!cookie) return res.status(200).json(null);
    
    try {
      const user = JSON.parse(cookie);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(200).json(null);
    }
  }
  
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}