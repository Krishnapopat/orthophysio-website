# OrthoPhysio Equipments Website

A modern, professional website for OrthoPhysio Equipments - a leading manufacturer of physiotherapy equipment based in Gujarat, India. The website showcases a comprehensive range of therapeutic equipment and includes a fully functional contact form with email integration.

![OrthoPhysio Website](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15.2.4-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue)

## 🌐 Live Website

**🚀 [Visit Live Website: orthophysio-website.vercel.app](https://orthophysio-website.vercel.app/)**

Experience the full website with all 48 physiotherapy products, interactive contact form, and professional design.

## 🌟 Features

### 🏥 **Business Features**
- **48 Professional Products** - Complete physiotherapy equipment catalog
- **Detailed Product Information** - Features, applications, and specifications
- **Professional Branding** - Custom logo and consistent design
- **Contact Integration** - Multiple contact methods with direct email functionality
- **Mobile Responsive** - Optimized for all devices

### 🔧 **Technical Features**
- **Modern Next.js 15** - App Router, TypeScript, and React 18
- **Email Integration** - Direct email sending with Resend service
- **Professional UI** - shadcn/ui components with Tailwind CSS
- **SEO Optimized** - Proper metadata and structured content
- **Fast Performance** - Optimized images and efficient loading
- **Production Ready** - Built for Vercel deployment

## 🛠️ Technologies Used

- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui
- **Email Service:** Resend
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/orthophysio-website.git
   cd orthophysio-website
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

The contact form uses [Resend](https://resend.com) for reliable email delivery.

### Quick Setup (5 minutes)

1. **Create Resend Account**
   - Go to [resend.com](https://resend.com)
   - Sign up for free (3,000 emails/month)
   - Verify your email address

2. **Get API Key**
   - In Resend dashboard → API Keys
   - Create new API key: "OrthoPhysio Website"
   - Copy the key (starts with `re_`)

3. **Add to Environment**
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Restart Development Server**
   ```bash
   npm run dev
   ```

### Email Features
- **Direct delivery** to `bhavinpopat2007@gmail.com`
- **Professional HTML format** with customer details
- **Automatic timestamps** in Indian Standard Time
- **Clickable phone and email links**
- **Form validation** and error handling

## 📁 Project Structure

```
orthophysio-website/
├── app/
│   ├── api/send-email/          # Email API endpoint
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── product-card.tsx         # Product display component
│   └── theme-provider.tsx       # Theme configuration
├── public/
│   ├── equipment/               # Product images
│   ├── logo.jpeg                # Brand logo
│   └── favicon files            # Website icons
├── lib/
│   └── utils.ts                 # Utility functions
└── README.md                    # This file
```

## 🏢 About OrthoPhysio Equipments

**25+ Years of Excellence in Physiotherapy Equipment**

OrthoPhysio Equipments is a trusted manufacturer of high-quality physiotherapy equipment, serving healthcare professionals across Gujarat, Rajasthan, and India. We specialize in:

- **Hand Therapy Equipment** - Grippers, exercisers, and fine motor tools
- **Upper Limb Rehabilitation** - Pulleys, shoulder equipment, and mobility aids
- **Lower Limb Equipment** - Pedal exercisers, balance boards, and knee tools
- **Pediatric Equipment** - CP chairs, walkers, and sensory integration tools
- **Treatment Tables & Accessories** - Professional clinical furniture

### Our Reach
- **Gujarat:** Vadodara, Surat, Bardoli, Rajkot, Morbi
- **Rajasthan:** Abu Road and surrounding regions
- **Clients:** Government institutions, private colleges, clinics

## 📞 Contact Information

**OrthoPhysio Equipments**

📱 **Phone:** +91 9824276125, +91 9426984196  
📧 **Email:** bhavinpopat2007@gmail.com  
📍 **Address:** C-19/20 Jalanand Township, Gorwa Refinery Road, Vadodara, Gujarat - 390016, India

**Built with ❤️ for healthcare professionals**

*Empowering physiotherapy practices with quality equipment and modern technology.* 