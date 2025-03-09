# FreshHarvest - Modern E-commerce Platform

FreshHarvest is a modern, full-stack e-commerce platform designed to connect local farmers with conscious consumers, making fresh, sustainable produce accessible to everyone.

- Demo link: https://drive.google.com/file/d/1n9RBPRcMsJ_tricNfHlYK2iHzp0lBFS0/view?usp=sharing
- Hosted link: https://navz-fresh-harvest.vercel.app

## 🌟 Features

### 🛍️ Shopping Experience
- **Dynamic Product Catalog**: Browse through a wide range of fresh produce and organic food
- **Product Details**: Detailed product information with high-quality images
- **Related Products**: Smart product recommendations
- **Shopping Cart**: Easy-to-use cart functionality

### 👤 User Authentication
- **Secure Login/Signup**: Modern authentication system
- **Password Recovery**: Forgot password functionality
- **User Profiles**: Personalized user experience

### 📱 Responsive Design
- **Mobile-First Approach**: Fully responsive across all devices
- **Modern UI/UX**: Clean and intuitive interface
- **Smooth Animations**: Enhanced user experience with subtle animations

### 📝 Content Management
- **Blog System**: Engaging articles about healthy eating and sustainability
- **About Page**: Company information and mission statement
- **Contact Form**: Easy communication channel for customers

## 🛠️ Tech Stack

### Frontend
- **Next.js 13**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI component library

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Naveen-Nair/navz-fresh-harvest.git
cd naveen-harvest-fresh
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Fill in your environment variables in the .env file

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js 13 app directory
│   │   ├── _components/  # Shared components
│   │   ├── _data/       # Static data
│   │   ├── api/         # API routes
│   │   └── [...]/       # Page components
│   ├── server/          # Server-side code
│   ├── styles/          # Global styles
│   └── trpc/           # tRPC setup
├── prisma/             # Database schema
├── public/             # Static assets
└── [...config files]   # Configuration files
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


