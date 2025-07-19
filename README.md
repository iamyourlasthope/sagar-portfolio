# Sagar Singh - Portfolio Website

A modern, responsive portfolio website for Sagar Singh, a digital content creator and meme marketer with 100K+ followers across Instagram and YouTube.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Improved SEO and performance
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Built with React, TypeScript, and Tailwind CSS
- **Interactive Components** - Smooth animations and transitions
- **Contact Integration** - EmailJS integration for contact forms
- **Social Media Integration** - Direct links to Instagram and YouTube

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Shadcn/ui
- **Styling**: Tailwind CSS with custom animations
- **Server**: Express.js with SSR
- **Build Tool**: Vite
- **State Management**: React Query
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📱 Pages

- **Home** - Hero section with social stats and call-to-action
- **About** - Skills and expertise showcase
- **Portfolio** - Work samples and collaborations
- **Services** - Offered services and packages
- **Campaigns** - Past brand collaborations
- **Contact** - Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sagar-portfolio.git
   cd sagar-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Production Build

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 📁 Project Structure

```
sagaredits/
├── src/
│   ├── components/
│   │   ├── portfolio/     # Portfolio-specific components
│   │   └── ui/           # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── assets/           # Static assets
│   ├── entry-client.tsx  # Client-side entry point
│   ├── entry-server.tsx  # Server-side entry point
│   └── main.tsx          # Main entry point
├── server/
│   └── index.js          # Express server for SSR
├── public/               # Public assets
└── index.html            # HTML template
```

## 🎨 Customization

### Colors and Themes
The project uses CSS custom properties for theming. Main colors are defined in `src/index.css`:

- Primary: Blue gradient
- Accent: Electric blue
- Background: Dark theme

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation if needed

### Updating Content
- **Hero Section**: Edit `src/components/portfolio/HeroSection.tsx`
- **About Section**: Edit `src/components/portfolio/AboutSection.tsx`
- **Portfolio**: Edit `src/components/portfolio/PortfolioSection.tsx`
- **Contact**: Edit `src/components/portfolio/ContactSection.tsx`

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or deploy branch

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy your React app
3. Configure build settings if needed

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📞 Contact

- **Instagram**: [@sagar.edits](https://www.instagram.com/sagar.edits/)
- **YouTube**: [Sagar Edits Official](https://youtube.com/sagareditsofficial)
- **Email**: Contact through the website form

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
