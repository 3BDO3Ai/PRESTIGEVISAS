# Faz3a - Modern Arabic Financial Platform

A cutting-edge financial services web application built with Next.js, TypeScript, and TailwindCSS. Faz3a provides instant financial liquidity solutions with innovative payment options including Tabby and Tamara integrations.

![Faz3a Banner](public/Logo.svg)

---

## 🚀 **Ready to Deploy to Your Site?**

👉 **[START HERE - Quick Deployment Guide](./START-HERE.md)** 👈

This project is fully prepared for deployment with complete documentation. Everything you need to deploy to a new site is ready!

---

## 🚀 Features

### Core Functionality
- 💰 **Financial Calculator** - Advanced calculation engine for installment plans
- � **Price Management** - Dynamic pricing with real-time updates
- 🔐 **Admin Dashboard** - Comprehensive content and pricing management
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- �🌐 **RTL Support** - Full Arabic language support with proper RTL layout

### Technical Features
- ⚡ **Next.js 15** with App Router for optimal performance
- 🎨 **TailwindCSS** for modern, utility-first styling
- � **TypeScript** for type-safe development
- 🔤 **Cairo Font** from Google Fonts for beautiful Arabic typography
- ☁️ **Supabase Integration** for cloud-based content management
- 🎭 **Loading Animations** with smooth splash screen transitions

### Payment Integrations
- 💳 **Tabby Integration** - Buy now, pay later solutions
- 🛒 **Tamara Integration** - Flexible payment options
- 📊 **Real-time Calculations** - Instant payment plan calculations

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Supabase](https://supabase.com/) | Backend-as-a-Service for data management |
| [Google Fonts](https://fonts.google.com/) | Cairo font for Arabic typography |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with RTL support
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles and animations
│   ├── admin/             # Admin panel pages
│   └── api/               # API routes
│       └── admin/         # Admin API endpoints
├── components/
│   ├── LoadingSplash.tsx  # Animated loading screen
│   ├── ContentWrapper.tsx # Content loading wrapper
│   ├── FinanceCalculator.tsx # Main calculator component
│   ├── PriceList.tsx      # Dynamic pricing display
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── admin/             # Admin-specific components
├── content/
│   ├── useContent.ts      # Content management hook
│   └── content.json       # Local content fallback
└── lib/
    ├── financeCalculations.ts # Financial calculation logic
    └── [other utilities]
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Faz3a33/Faz3a.git
   cd Faz3a
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy the example file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```bash
   # Admin Configuration
   ADMIN_PASSWORD=your_admin_password

   # Supabase Configuration  
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```
   
   See `.env.example` for detailed documentation of each variable.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Configuration

### Supabase Setup
The application uses Supabase for content management. Content is fetched from:
```
https://mgltkbcfblwvqdnmnttl.supabase.co/storage/v1/object/public/Content/content.json
```

### Admin Access
- Access the admin panel at `/admin`
- Use the configured admin password to manage content and pricing

## 📱 Key Components

### Financial Calculator
Advanced calculator supporting:
- Tabby and Tamara payment providers
- First payment options
- Real-time installment calculations
- WhatsApp integration for order sharing

### Content Management
- Dynamic content loading from Supabase
- Fallback to local content
- Admin interface for content updates
- Real-time price management

### User Experience
- Animated splash screen during content loading
- Smooth transitions and modern animations
- Fully responsive design
- RTL-optimized layouts

## 🚢 Deployment to Another Site

This project is ready to be deployed to a new website. Complete documentation is available:

### Quick Start
See **[QUICK-SETUP.md](./QUICK-SETUP.md)** for a 5-minute deployment guide.

### Complete Guides
- 📘 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete step-by-step deployment instructions
- ⚙️ **[CONFIGURATION.md](./CONFIGURATION.md)** - Customization and branding guide
- ✅ **[DEPLOYMENT-CHECKLIST.md](./DEPLOYMENT-CHECKLIST.md)** - Comprehensive checklist

### Prerequisites for New Site
1. Supabase account and project
2. Hosting platform (Vercel, Netlify, etc.)
3. Node.js 22.x
4. Environment variables configured (see `.env.example`)

### Quick Deploy to Vercel
```bash
# 1. Set up environment variables (copy from .env.example)
# 2. Push to GitHub
# 3. Import to Vercel
# 4. Add environment variables in Vercel dashboard
# 5. Deploy!
```

### Environment Variables Required
All environment variables are documented in `.env.example`. Essential variables:
```bash
ADMIN_PASSWORD=                    # Your admin password
NEXT_PUBLIC_SUPABASE_URL=         # Your Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=    # Supabase anon key
SUPABASE_SERVICE_ROLE_KEY=        # Supabase service role key (keep secret!)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For support and inquiries, please contact:
- Email: naqwastor@gmail.com
- GitHub: [@Faz3a33](https://github.com/Faz3a33)

---

**Built with ❤️ for the Arabic-speaking community**