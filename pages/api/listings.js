 
let listings = [
  { id: 1, title: 'Toyota Camry', status: 'pending', price: 50, owner: 'sophie.james@gmail.com' },
  { id: 2, title: 'Honda Accord', status: 'approved', price: 45, owner: 'daniel.morris@yahoo.com' },
  { id: 3, title: 'Ford Mustang', status: 'rejected', price: 70, owner: 'emily.harris@outlook.com' },
  { id: 4, title: 'Chevrolet Malibu', status: 'approved', price: 48, owner: 'noah.clark@gmail.com' },
  { id: 5, title: 'Nissan Altima', status: 'pending', price: 52, owner: 'ava.miller@protonmail.com' },
  { id: 6, title: 'BMW 3 Series', status: 'rejected', price: 90, owner: 'ethan.jordan@icloud.com' },
  { id: 7, title: 'Audi A4', status: 'approved', price: 85, owner: 'olivia.reed@hotmail.com' },
  { id: 8, title: 'Tesla Model 3', status: 'pending', price: 100, owner: 'liam.brooks@gmail.com' },
  { id: 9, title: 'Hyundai Elantra', status: 'approved', price: 44, owner: 'mia.kelly@yahoo.com' },
  { id: 10, title: 'Kia Optima', status: 'rejected', price: 46, owner: 'lucas.baker@outlook.com' },
  { id: 11, title: 'Subaru Legacy', status: 'approved', price: 50, owner: 'grace.adams@gmail.com' },
  { id: 12, title: 'Mazda 6', status: 'pending', price: 49, owner: 'logan.ward@hotmail.com' },
  { id: 13, title: 'Volkswagen Passat', status: 'rejected', price: 47, owner: 'chloe.lee@yahoo.com' },
  { id: 14, title: 'Volvo S60', status: 'approved', price: 75, owner: 'jack.evans@gmail.com' },
  { id: 15, title: 'Jaguar XE', status: 'pending', price: 95, owner: 'ella.cooper@live.com' },
  { id: 16, title: 'Lexus IS', status: 'rejected', price: 88, owner: 'henry.morgan@icloud.com' },
  { id: 17, title: 'Infiniti Q50', status: 'approved', price: 83, owner: 'scarlett.bailey@gmail.com' },
  { id: 18, title: 'Acura TLX', status: 'approved', price: 78, owner: 'sebastian.gray@outlook.com' },
  { id: 19, title: 'Chrysler 300', status: 'rejected', price: 72, owner: 'lily.morris@hotmail.com' },
  { id: 20, title: 'Genesis G70', status: 'pending', price: 80, owner: 'jayden.roberts@gmail.com' },
  { id: 21, title: 'Honda Civic', status: 'approved', price: 40, owner: 'zoe.foster@yahoo.com' },
  { id: 22, title: 'Toyota Corolla', status: 'rejected', price: 42, owner: 'nathan.watson@live.com' },
  { id: 23, title: 'Ford Fusion', status: 'pending', price: 50, owner: 'hannah.richards@gmail.com' },
  { id: 24, title: 'Chevrolet Cruze', status: 'approved', price: 38, owner: 'leo.bell@protonmail.com' },
  { id: 25, title: 'Nissan Sentra', status: 'rejected', price: 36, owner: 'ariana.turner@icloud.com' },
  { id: 26, title: 'Hyundai Sonata', status: 'approved', price: 48, owner: 'isaac.wells@gmail.com' },
  { id: 27, title: 'Kia Forte', status: 'pending', price: 41, owner: 'victoria.bennett@hotmail.com' },
  { id: 28, title: 'Subaru Impreza', status: 'rejected', price: 43, owner: 'elijah.palmer@outlook.com' },
  { id: 29, title: 'Mazda 3', status: 'approved', price: 44, owner: 'madison.holt@yahoo.com' },
  { id: 30, title: 'Volkswagen Jetta', status: 'pending', price: 46, owner: 'wyatt.hughes@gmail.com' },
  { id: 31, title: 'Volvo S90', status: 'approved', price: 85, owner: 'penelope.miles@live.com' },
  { id: 32, title: 'Jaguar XF', status: 'rejected', price: 95, owner: 'landon.owens@icloud.com' },
  { id: 33, title: 'Lexus ES', status: 'pending', price: 88, owner: 'nora.freeman@gmail.com' },
  { id: 34, title: 'Infiniti Q70', status: 'approved', price: 90, owner: 'carter.daniels@yahoo.com' },
  { id: 35, title: 'Acura RLX', status: 'rejected', price: 86, owner: 'audrey.jameson@hotmail.com' },
  { id: 36, title: 'Genesis G80', status: 'pending', price: 92, owner: 'julian.foster@outlook.com' },
  { id: 37, title: 'Tesla Model S', status: 'approved', price: 120, owner: 'hazel.reynolds@gmail.com' },
  { id: 38, title: 'BMW 5 Series', status: 'pending', price: 98, owner: 'aiden.richardson@protonmail.com' },
  { id: 39, title: 'Audi A6', status: 'rejected', price: 97, owner: 'ellie.simpson@yahoo.com' },
  { id: 40, title: 'Mercedes-Benz C-Class', status: 'approved', price: 100, owner: 'theo.bradley@gmail.com' },
  { id: 41, title: 'Honda Fit', status: 'approved', price: 30, owner: 'piper.davidson@icloud.com' },
  { id: 42, title: 'Toyota Yaris', status: 'pending', price: 32, owner: 'miles.dixon@gmail.com' },
  { id: 43, title: 'Nissan Versa', status: 'rejected', price: 31, owner: 'eva.collins@yahoo.com' },
  { id: 44, title: 'Hyundai Accent', status: 'approved', price: 34, owner: 'christian.stone@outlook.com' },
  { id: 45, title: 'Kia Rio', status: 'pending', price: 33, owner: 'claire.bishop@hotmail.com' },
  { id: 46, title: 'Chevy Sonic', status: 'rejected', price: 35, owner: 'levi.matthews@live.com' },
  { id: 47, title: 'Ford Fiesta', status: 'approved', price: 36, owner: 'lucy.nichols@gmail.com' },
  { id: 48, title: 'Mazda 2', status: 'pending', price: 37, owner: 'joseph.burns@icloud.com' },
  { id: 49, title: 'Volkswagen Golf', status: 'approved', price: 39, owner: 'paisley.mason@yahoo.com' },
  { id: 50, title: 'Mini Cooper', status: 'rejected', price: 55, owner: 'gabriel.barnes@gmail.com' },
];


let auditLog = [];

export default function handler(req, res) {
  const { method } = req;
  const adminEmail = req.headers['admin-email'];

  switch (method) {
    case 'GET':
      const { status } = req.query;
      const filteredListings = status 
        ? listings.filter(listing => listing.status === status)
        : listings;
      res.status(200).json(filteredListings);
      break;

    case 'PUT':
      const { id, action, data } = req.body;
      const listingIndex = listings.findIndex(l => l.id === id);
      
      if (listingIndex === -1) {
        return res.status(404).json({ message: 'Listing not found' });
      }

      if (action === 'edit') {
        listings[listingIndex] = { ...listings[listingIndex], ...data };
      } else if (['approve', 'reject'].includes(action)) {
        listings[listingIndex].status = action === 'approve' ? 'approved' : 'rejected';
      }

      auditLog.push({
        action,
        listingId: id,
        adminEmail,
        timestamp: new Date().toISOString(),
      });

      res.status(200).json(listings[listingIndex]);
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}