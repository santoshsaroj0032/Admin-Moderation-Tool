# 🚗 Car Rental Admin Dashboard

## 🌟 Project Overview

A sleek admin dashboard built with **Next.js** for managing car rental listings. Administrators can review, approve, reject, and edit user-submitted vehicle listings through an intuitive interface.

 <img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/38eb68f5-f902-4a6e-87ff-3250ebe7b621" />
<img width="1901" height="872" alt="image" src="https://github.com/user-attachments/assets/2a8f6651-9a85-4c0f-8959-a829f5b49feb" />

---

## ✨ Key Features

- 🔐 **Secure Authentication** with admin login  
- 📝 **Listing Management** (Approve / Reject / Edit)  
- 🧠 **Status Filtering** (Pending / Approved / Rejected)  
- 📱 **Responsive Design** across all devices  
- ⚡ **Real-time Updates** without page refresh  
- 🕵️ **Audit Trail** (Coming Soon)

---

## 🔧 Temporary Login Credentials

> **Note:** These are test credentials. Change them before deploying to production
 ```
Email: santoshsaroj0032@gmail.com
Password: admin123
 ```

     
---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13, React 18  
- **Styling:** Tailwind CSS  
- **State Management:** React Context API  
- **Routing:** Next.js Router  
- **Authentication:** Cookie-based sessions  

---

## 🚀 Getting Started

### Prerequisites
```
- Node.js (v16+ recommended)  
- npm or yarn
```
### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/car-rental-admin.git
 ```

### Install dependencies:
``` 
npm install
# or
yarn install
```

### Start the development server:
```
npm run dev
# or
yarn dev
```


### 🌈 UI Components

- Login Form: Clean and modern authentication interface
- Listing Table: Sortable, filterable, responsive
- Status Badges: Color-coded for quick identification
- Action Buttons: Context-aware (Approve/Reject/Edit shown conditionally)



### 🔒 Authentication Flow

- User submits credentials via login form
- Server validates and sets a secure HttpOnly cookie
- Dashboard verifies cookie on each request
- Automatic logout after inactivity (Coming Soon)

### 🚀 Future Improvements

- Add audit logging (status changes, timestamp, admin name)
- Implement CSV export for listings
- Bulk actions (Approve/Reject multiple listings)
- Enhanced search and filtering functionality

### 🤝 Contributing
Contributions are welcome!
Please open an issue first for any major changes or ideas.

Made with ❤️ by Santosh Saroj
