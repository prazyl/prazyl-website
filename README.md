# PRĀZYL Marketing Website

A professional marketing website for PRĀZYL insurance claims management software, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌐 Live Site
- **Production**: https://prazyl.com
- **Development**: http://localhost:3007

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes with persistence
- **Professional UI**: Matches the main app's design system
- **Smooth Animations**: Framer Motion animations and transitions

### 📄 Content Sections
- **Hero Section**: Compelling value proposition with CTA
- **Features**: Comprehensive overview of PRĀZYL capabilities
- **Pricing**: Three-tier pricing with Stripe integration
- **Testimonials**: Social proof from insurance professionals
- **FAQ**: Common questions and answers
- **Footer**: Complete navigation and contact information

### 🔍 SEO Optimization
- **Meta Tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for search engines
- **Sitemap**: XML sitemap for search engine crawlers
- **Performance**: Optimized for Core Web Vitals

### 🔗 Integrations
- **Stripe Checkout**: Direct integration with pricing plans
- **App Integration**: Seamless navigation to prazyl.app
- **Contact Forms**: Direct email integration
- **Social Media**: Links to all social platforms

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone or navigate to the project
cd prazyl-website

# Install dependencies
npm install

# Run development server
npm run dev
```

### Development
The site will be available at http://localhost:3007 (or the next available port).

## 📦 Project Structure

```
prazyl-website/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── HeroSection.tsx # Hero section
│   │   ├── FeaturesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   ├── privacy/            # Privacy policy page
│   ├── terms/              # Terms of service page
│   ├── sitemap.xml/        # Dynamic sitemap generation
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── public/
│   └── robots.txt          # Search engine directives
└── README.md
```

## 🎯 Key Components

### Header
- Responsive navigation
- Dark/light theme toggle
- Mobile menu with smooth animations
- Direct links to prazyl.app

### Hero Section
- Compelling value proposition
- Clear call-to-action buttons
- Trust indicators and benefits
- Animated dashboard preview

### Pricing Section
- Three-tier pricing structure
- Monthly/yearly billing toggle
- Direct Stripe checkout integration
- Money-back guarantee highlight

### Features Section
- 9 key feature highlights with icons
- Additional features showcase
- Built for professionals section
- Demo scheduling CTA

### Testimonials
- 6 authentic testimonials
- Performance statistics
- Social proof from industry professionals
- Strong CTA section

### FAQ Section
- 10 comprehensive FAQs
- Expandable/collapsible interface
- Contact information
- Support links

## 🚀 Deployment

### Ionos Web Hosting
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload the `.next/` folder and `public/` folder
   - Configure Node.js hosting environment
   - Set environment variables if needed

3. **Configure domain**:
   - Point prazyl.com to your hosting
   - Set up SSL certificate
   - Configure redirects if needed

### Environment Variables
For production, set these environment variables:
```
NEXT_PUBLIC_APP_URL=https://prazyl.app
NEXT_PUBLIC_SITE_URL=https://prazyl.com
```

## 🔧 Customization

### Updating Content
- **Hero text**: Edit `app/components/HeroSection.tsx`
- **Features**: Edit `app/components/FeaturesSection.tsx`
- **Pricing**: Edit `app/components/PricingSection.tsx`
- **Testimonials**: Edit `app/components/TestimonialsSection.tsx`
- **FAQ**: Edit `app/components/FAQSection.tsx`

### Styling
- Uses Tailwind CSS for consistent styling
- Matches the main app's design system
- Dark mode support built-in

### SEO
- Update meta tags in `app/layout.tsx`
- Modify structured data in `app/page.tsx`
- Add new pages to sitemap in `app/sitemap.xml/route.ts`

## 📈 Performance

### Optimizations
- Next.js 15 with App Router
- Image optimization
- Font optimization (Inter)
- CSS optimization with Tailwind
- Tree shaking and code splitting

### Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Track conversion rates from pricing section

## 🤝 Integration with Main App

### Seamless Navigation
- Header sign-in/signup buttons link to prazyl.app
- Pricing CTAs redirect to app signup with plan parameters
- Consistent branding and design language

### Stripe Integration
- Pricing buttons pass plan and billing parameters
- Supports monthly and yearly billing options
- Direct checkout flow through main app

## 📞 Support

For questions about the marketing website:
- **Technical issues**: developer@prazyl.com
- **Content updates**: marketing@prazyl.com
- **General inquiries**: contact@prazyl.com

## 📄 License

Copyright © 2025 PRĀZYL, Inc. All rights reserved.