# Global I Tech Solutions Inc. (GITSICS) Website

A modern, marketing-focused website for Global I Tech Solutions Inc., a New York-registered company specializing in IT Training, Staffing, and Consulting.

## 🚀 Features

- **Modern Design**: Clean, professional UI built with Next.js and Tailwind CSS
- **Responsive Layout**: Fully responsive design that works on all devices
- **Comprehensive Pages**:
  - Homepage with hero section and key features
  - About Us page
  - Training Programs/Courses page
  - Career Services page
  - Staffing Solutions page
  - How It Works page
  - Success Stories/Testimonials
  - Contact page with form
  - Legal pages (Terms, Privacy, Copyright, Refund Policy)

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
app/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx     # Site footer
│   └── CTAButton.tsx   # Call-to-action button component
├── about/              # About page
├── courses/            # Training programs page
├── career-services/    # Career services page
├── staffing/           # Staffing solutions page
├── how-it-works/      # Process explanation page
├── success-stories/    # Testimonials page
├── contact/            # Contact page with form
├── terms-of-use/       # Terms of use page
├── privacy-policy/     # Privacy policy page
├── copyright-notice/   # Copyright notice page
├── refund-policy/      # Refund policy page
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
└── globals.css         # Global styles
```

## 🎨 Key Features

### Homepage
- Hero section with compelling CTA
- How It Works overview
- Training programs preview
- Why Choose Us section
- Success stories preview
- Strong call-to-action sections

### Training Programs
- 6 comprehensive courses:
  - QA Manual Testing
  - QA Automation
  - Full-Stack SDET
  - API Testing & Automation
  - DevOps for Testers
  - AI for QA
- Detailed course information
- Certification paths

### Career Services
- Resume writing
- LinkedIn optimization
- GitHub portfolio development
- Mock interviews
- Job search strategy
- 1-on-1 mentorship

### Staffing Solutions
- Contract staffing
- SDET/QA engineers
- Automation consultants
- Team augmentation

## 🚀 Deployment

### Automatic Deployment to GitHub Pages

This project is configured for **automatic deployment** to GitHub Pages using GitHub Actions.

#### Setup (One-time)

1. **Enable GitHub Pages**:
   - Go to your repository settings: `Settings` → `Pages`
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push to trigger deployment**:
   - Push your code to the `main` or `master` branch
   - GitHub Actions will automatically build and deploy your site

#### How It Works

- **Automatic**: Every push to `main`/`master` triggers a deployment
- **Manual**: You can also trigger deployments manually from the Actions tab
- **URL**: Your site will be available at `https://[username].github.io/gitsics-website/`

#### Deployment Status

- Check deployment status: Go to the **Actions** tab in your repository
- View logs: Click on any workflow run to see detailed build logs
- Site URL: Available in the workflow summary after successful deployment

### Build for Production (Local)

```bash
npm run build
```

The static files will be generated in the `out` directory.

### Deploy to Vercel

You can also deploy to [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

## 📝 Customization

### Update Company Information

Edit the following files to update company details:
- `app/layout.tsx` - Metadata and site title
- `app/components/Footer.tsx` - Contact information
- `app/contact/page.tsx` - Contact details

### Update Content

All page content can be edited in their respective files in the `app/` directory.

## 📄 Legal Pages

All legal pages are included and can be customized:
- Terms of Use
- Privacy Policy
- Copyright Notice
- Refund & Cancellation Policy

## 🤝 Contributing

This is a private project for Global I Tech Solutions Inc. For questions or suggestions, please contact info@gitsics.com.

## 📧 Contact

**Global I Tech Solutions Inc.**
- Email: info@gitsics.com
- Location: New York, USA
- Registered in New York for Training, Staffing & Consulting

## 📜 License

Copyright © 2024 Global I Tech Solutions Inc. All rights reserved.
