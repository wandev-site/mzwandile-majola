<div align="center">
<img width="1200" height="475" alt="Portfolio Banner" src="public/MM Banner.png" />
</div>

# Mzwandile Majola - Personal Portfolio & Professional Showcase

A modern, fully responsive portfolio website showcasing professional experience, technical skills, and web development projects. Built with React, TypeScript, and Tailwind CSS with smooth animations and interactive features.

## 🌟 Website Features

### Hero Section
- Stunning responsive background imagery that adapts to mobile and desktop views
- Smooth fade transitions for seamless gradient blending
- Call-to-action buttons for easy navigation to projects and contact

### About Me
- Professional introduction highlighting IT Support and Web Development expertise
- Interactive image hover effects with random inspirational quotes
- Experience badge (2+ years) displayed prominently
- Education and focus area highlights

### Professional Journey
- Interactive timeline showcasing work experience at NetApps Development and CCI South Africa
- Responsive timeline design that adapts from desktop to mobile layouts
- Detailed descriptions of roles, responsibilities, and achievements
- Smooth animations on scroll

### Skills & Expertise
- Organized by categories:
  - **Frontend**: React JS, JavaScript, HTML5, CSS3, Bootstrap, Responsive Design
  - **Backend**: PHP, MySQL, SQL, Databases, RESTful APIs
  - **Data & AI**: Python, Data Analysis, Power BI, MS Excel, Azure Cloud
  - **Tools & Support**: IT Support, Git/GitHub, VS Code, Figma

### Featured Projects
- **WanDev**: High-quality WordPress and React templates marketplace for developers and agencies
- **NetApps Development**: Professional landing page showcase for laptop repair business
- **Data Dashboard**: Power BI visualization and analytics dashboard
- Clickable project cards with smooth transitions to project websites

### Contact & Communication
- **Phone Integration**: Direct phone app linking for both iOS and Android
- **Email Integration**: One-click email composer with pre-filled recipient and subject
- **Contact Form**: 
  - Multiple subject line options (Website Development, Web Apps, E-commerce, etc.)
  - Direct mailto submission that opens user's default email client
  - Required field validation
  - Styled dropdown with custom appearance

### CV/Resume
- Professional, print-friendly CV layout
- Downloadable and printable format
- Organized sections for experience, education, and skills
- Auto-scrolls to top on page load

## 🛠 Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Motion (Framer Motion alternative)
- **Icons**: Lucide React
- **Routing**: React Router
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 Responsive Design

- **Mobile-First Approach**: Optimized for all screen sizes
- **Desktop Views** (768px+): Full timeline, complete project details, enhanced layouts
- **Mobile Views** (<768px): Simplified navigation, mobile-optimized images, touch-friendly interactions
- **Tablet Support**: Smooth transitions between breakpoints

## ✨ Interactive Features

- Smooth page transitions with loading states
- Hover effects on project cards with modal-like reveals
- Interactive image fade-in on hover with inspirational quotes
- Grayscale to color transitions on images
- Animated skill badges and experience entries
- Real-time form validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mzwandile-majola
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── CV.tsx
│   └── ...
├── data/               # Portfolio content data
│   └── portfolio.ts    # Experience, skills, projects, education
├── hooks/              # Custom React hooks
│   └── useTransitionNavigate.ts
├── lib/                # Utility functions
│   └── utils.ts
└── App.tsx             # Main application component

public/
├── a-hero.png          # Desktop hero background
├── b-hero.png          # Mobile hero background
├── MM-logo.png         # Favicon
├── WanDev.PNG          # WanDev project image
└── NetApps.PNG         # NetApps project image
```

## 🎨 Customization

All portfolio content is stored in `src/data/portfolio.ts`, making it easy to update:
- Project information
- Work experience
- Skills and expertise
- Education history

## 📧 Contact

For inquiries or collaborations, contact through:
- **Email**: wandev.site@gmail.com
- **Phone**: +27 74 802 1881
- **Location**: Durban, South Africa

## 📄 License

This project is personal property. Please respect intellectual property and design choices.
