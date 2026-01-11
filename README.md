# 💖 Portfolio Website - Sierly Putri Anjani

A beautiful, modern, and minimalist personal portfolio website built with React, Tailwind CSS, and Framer Motion. Featuring a clean "girly but professional" aesthetic with pink accents and smooth animations.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?logo=framer)

## ✨ Features

- 🎨 **Modern & Minimalist Design** - Clean, professional aesthetic with a girly touch
- 💖 **Pink Color Scheme** - Beautiful pink accents throughout the design
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 🎭 **Glassmorphism Effects** - Modern blurred glass effects on navbar
- 🌟 **Interactive Elements** - Hover effects, scale animations, and transitions
- 🎯 **Sections Included**:
  - Hero section with profile introduction
  - Statistics showcase
  - About section ("Turning Ideas Into Masterpieces")
  - Tech Stack display
  - Projects portfolio (Backend Engineering & UI/UX Designs)
  - Academy activity (Google Student Ambassador 2025)
  - Certificates & Achievements
  - Contact section with social links

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Poppins Font** - Google Fonts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn** or **pnpm**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sierlyptri/portfolio-2026.git
   cd portfolio-2026
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
   or
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio-2026/
├── public/
│   └── images/           # Image assets
│       ├── hero/         # Profile photo
│       ├── projects/     # Project mockups
│       └── certificates/ # Certificate images
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Statistics.jsx
│   │   ├── About.jsx
│   │   ├── TechStack.jsx
│   │   ├── Projects.jsx
│   │   ├── Academy.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Adding Your Images

1. **Profile Photo**
   - Place your photo at `public/images/hero/profile-photo.jpg`
   - Recommended size: 1200 x 1500 px (4:5 ratio)
   - Max file size: 500 KB

2. **Project Mockups**
   - Place UI/UX mockups in `public/images/projects/ui-ux/`
   - Mobile apps: 800 x 1200 px (2:3 ratio)
   - Desktop/web: 1200 x 800 px (3:2 ratio)
   - Max file size: 300 KB each

3. **Certificates** (Optional)
   - Place certificate images in `public/images/certificates/`
   - Recommended size: 1200 x 800 px (3:2 ratio)
   - Max file size: 400 KB each

📝 **See [ASSETS_GUIDE.md](./ASSETS_GUIDE.md) for detailed image requirements**

### Updating Content

Edit the component files in `src/components/` to customize:
- Personal information (Hero.jsx)
- Projects list (Projects.jsx)
- Tech stack (TechStack.jsx)
- Certificates (Certificates.jsx)
- Contact information (Contact.jsx)
- Social media links (Contact.jsx)

### Changing Colors

Modify the color scheme in `tailwind.config.js`:
```js
colors: {
  'accent-pink': '#EC4899',
  'pink-light': '#FCE7F3',
  // ... customize your colors
}
```

## 🌐 Deploy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 📸 Screenshots

<!-- Add your screenshots here -->
![Hero Section](screenshots/hero.png)
![Projects Section](screenshots/projects.png)
![Certificates Section](screenshots/certificates.png)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter (if configured)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sierly Putri Anjani**

- Portfolio: [Your Portfolio URL]
- Email: sierlypajani89@gmail.com
- LinkedIn: [linkedin.com/in/sierlyptri](https://linkedin.com/in/sierlyptri)
- Instagram: [@sierlyptri](https://instagram.com/sierlyptri)
- GitHub: [@sierlyptri](https://github.com/sierlyptri)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Poppins font

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Built with 💖 and code by Sierly Putri Anjani**
