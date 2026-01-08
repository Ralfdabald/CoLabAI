<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# CoLab AI - Startup Validation Platform

A modern, beautifully designed landing page for CoLab AI - a platform that helps founders validate their startup ideas, find co-founders, and get paying customers in 30 days.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **🎨 Modern UI/UX**: Premium design with glassmorphism, gradients, and smooth animations
- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **📱 Fully Responsive**: Seamless experience across all devices
- **🎭 Rich Animations**: Powered by Framer Motion for engaging interactions
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML
- **♿ Accessible**: Built with accessibility best practices
- **🔧 TypeScript**: Full type safety for better developer experience

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) with TypeScript
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [ElevenLabs ConvAI](https://elevenlabs.io/)

## 📦 Installation

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ralfdabald/CoLabAI.git
   cd CoLabAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
   
   Get your API key from: https://ai.google.dev/

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Project Structure

```
CoLabAI/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   ├── BackgroundEffects.tsx
│   │   ├── Button.tsx
│   │   └── SpotlightCard.tsx
│   ├── CTA.tsx         # Call-to-action section
│   ├── Features.tsx    # Features showcase
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   └── Testimonials.tsx # Customer testimonials
├── App.tsx             # Main app component
├── index.tsx           # App entry point
├── types.ts            # TypeScript type definitions
├── index.html          # HTML template
├── index.css           # Global styles
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `GEMINI_API_KEY` environment variable
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add your `GEMINI_API_KEY` environment variable
6. Deploy!

### Other Platforms

Build the project:
```bash
npm run build
```

The `dist` folder contains the production-ready static files that can be deployed to any static hosting service.

## 🎯 Key Components

### Hero Section
Eye-catching hero with animated elements, parallax effects, and compelling value proposition.

### Features
Three-column grid showcasing the platform's core features with interactive spotlight cards.

### Testimonials
Social proof section with customer success stories and ratings.

### CTA
Conversion-focused call-to-action with guarantee badges.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **AI Studio App**: https://ai.studio/apps/drive/1BNZAupVUB_OWxH_-6wlG8ytihiXLsCBv
- **Repository**: https://github.com/Ralfdabald/CoLabAI

## 💬 Support

For questions or support, please open an issue in the GitHub repository.

---

<div align="center">
Made with ❤️ by CoLab AI
</div>
