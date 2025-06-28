# YUYA Portfolio Clone

A beautiful, modern portfolio website clone inspired by [yuya.framer.website](https://yuya.framer.website/), built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Smooth Animations**: Beautiful page transitions and micro-interactions using Framer Motion
- **Responsive Design**: Fully responsive design that works on all devices
- **Modern UI**: Clean, minimal design with elegant typography
- **Scroll Animations**: Elements animate as they come into view
- **Mobile Menu**: Elegant mobile navigation with smooth animations
- **Scroll Progress**: Visual scroll progress indicator
- **Custom Cursor**: Interactive cursor effects (desktop only)
- **Magnetic Buttons**: Hover effects that create magnetic attraction
- **Text Gradients**: Animated gradient text effects
- **Dark Mode Ready**: Supports dark mode preferences

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd yuya-portfolio-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

## 📁 Project Structure

```
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact section
│   │   ├── Cursor.tsx      # Custom cursor component
│   │   ├── FloatingButton.tsx # Floating contact button
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── MobileMenu.tsx  # Mobile navigation menu
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── ScrollIndicator.tsx # Scroll progress indicator
│   │   └── Work.tsx        # Portfolio/work section
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Key Components

### Hero Section
- Large typography with animated entrance
- Profile image with hover effects
- Email contact with copy-to-clipboard functionality
- Vertical YASKUMI text with gradient animation

### Work Section
- Grid layout showcasing portfolio projects
- Hover effects with image scaling
- Staggered animations for project cards

### About Section
- Personal information and skills
- Social media links with hover effects
- Professional image with subtle animations

### Contact Section
- Call-to-action with magnetic button effect
- Contact information with hover animations
- Smooth scroll to section functionality

## ⚡ Performance Features

- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Optimized images with Next.js Image component
- **Lazy Loading**: Components and images load as needed
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎭 Animation Details

The website features several types of animations:

1. **Page Load Animations**: Smooth fade-in and slide-up effects
2. **Scroll Animations**: Elements animate when they come into view
3. **Hover Effects**: Interactive hover states for buttons and links
4. **Magnetic Buttons**: Buttons that react to mouse proximity
5. **Text Gradients**: Animated gradient effects on large text
6. **Parallax Effects**: Subtle parallax scrolling on some elements

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational purposes. The original design belongs to the creators of yuya.framer.website.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

---

**Note**: This is a clone/recreation of the original Yuya portfolio website for educational and demonstration purposes. All design credit goes to the original creators.
