# Prestige Visas

Premium visa and immigration consultancy website built with Next.js 16 and TypeScript.

![Prestige Visas](public/favicon.ico)

---

## 🌟 About

Prestige Visas is a premium immigration consultancy offering expert guidance for UK, Canada, Schengen, USA, Australia & beyond. This modern, responsive website showcases our services with:

- 🎯 Premium design with gold accents and navy theme
- 🌍 Multi-destination visa services
- 📱 Fully responsive mobile-first design
- 💬 WhatsApp integration for consultations
- 🎥 Video introduction section
- ⭐ Client testimonials
- 📊 Service showcase with detailed process

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Heroicons](https://heroicons.com/) | Beautiful hand-crafted SVG icons |
| [Google Fonts](https://fonts.google.com/) | Playfair Display & Inter fonts |

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & animations
├── components/
│   ├── Navigation.tsx      # Header navigation with mobile menu
│   ├── HeroSection.tsx     # Hero banner with CTA
│   ├── ServicesSection.tsx # Services showcase cards
│   ├── DestinationsSection.tsx # Featured destinations
│   ├── ProcessSection.tsx  # 4-step process timeline
│   ├── VideoSection.tsx    # Introduction video player
│   ├── WhyChooseUsSection.tsx # Benefits & features
│   ├── TestimonialsSection.tsx # Client reviews
│   ├── GuaranteeSection.tsx # Trust badges
│   ├── CTASection.tsx      # Contact form with WhatsApp
│   ├── Footer.tsx          # Footer with social links
│   ├── TrustBadges.tsx     # Certification badges
│   └── Icons.tsx           # Custom SVG icon components
public/
├── Introduction.mp4        # Welcome video
├── favicon.ico            # Site icon
└── images/                # Destination & landmark images
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/3BDO3Ai/PRESTIGEVISAS.git

# Navigate to project directory
cd PRESTIGEVISAS

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## ✨ Key Features

### 1. WhatsApp Consultation Form
- Interactive consultation booking form
- Auto-populates WhatsApp with form data
- Includes: name, email, phone, destination, visa type
- Direct integration with business WhatsApp number

### 2. Video Introduction
- Full-width video player
- Auto-plays introduction video
- Professional welcome message

### 3. Destination Showcase
- UK, Canada, Schengen, USA, Australia
- Interactive hover effects
- Landmark background images with gradient overlays

### 4. Premium Design
- Navy (#1a2a4a) and Gold (#d4af37) color scheme
- Playfair Display serif font for headings
- Inter sans-serif font for body text
- Smooth animations and transitions

### 5. Social Media Integration
- TikTok: [@prestigevisas](https://www.tiktok.com/@prestigevisas)
- YouTube: [@PrestigeVisas](https://www.youtube.com/@PrestigeVisas)
- Instagram: [@prestigevisas](https://www.instagram.com/prestigevisas)
- Facebook: [Prestige Visas](https://www.facebook.com/share/1FnjEBqp62/)

---

## 📞 Contact Information

- **Phone:** +44 7307 515724
- **WhatsApp:** [Chat with us](https://wa.me/447307515724)
- **Email:** info@prestigevisas.com
- **Website:** prestigevisas.in

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option 2: cPanel/Namecheap Hosting

1. **Upload files** to your hosting directory via File Manager or FTP
2. **Create Node.js App** in cPanel:
   - Node version: 18.x or higher
   - Application root: `/home/username/prestigevisas.in`
   - Startup file: `app.js`
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Application will auto-build** via postinstall script
5. **Start the application** from cPanel

### Environment Setup

No environment variables required for basic functionality.

---

## 🎨 Customization

### Update Contact Information

Edit `src/components/CTASection.tsx`:
```typescript
const whatsappNumber = '447307515724'; // Your WhatsApp number
```

Edit `src/components/Footer.tsx`:
```tsx
<li className="text-white/60 text-sm">+44 7307 515724</li>
<li className="text-white/60 text-sm">info@prestigevisas.com</li>
```

### Update Social Media Links

Edit `src/components/Footer.tsx` to update social media URLs.

### Change Video

Replace `public/Introduction.mp4` with your video file.

### Update Destinations

Edit `src/components/DestinationsSection.tsx` to modify destination list.

---

## 📄 License

Private - © 2025 Prestige Visas. All rights reserved.

---

## 👨‍💻 Developer

Developed by [3BDO3Ai](https://github.com/3BDO3Ai)

---

## 🤝 Support

For support or inquiries:
- Email: abdalrhmanayoub414@gmail.com
- WhatsApp: +44 7307 515724

---

**Built with ❤️ using Next.js**
