# Gouchi - Luxury Jewelry E-commerce

A modern, responsive e-commerce website for luxury jewelry built with React and Vite. This project features a sophisticated navigation system with interactive mega menus, Arabic language support, and smooth animations.

## ✨ Features

### 🛍️ Enhanced Navigation System
- **Dual Mega Menus**: Interactive hover-activated dropdowns for product categories and gifts
- **Smart Categories Navigation**: Organized jewelry sections (Rings, Necklaces, Bracelets)
- **Gifts Mega Menu**: 4 dedicated gift categories (Wedding, Holiday, Birthday, Special Occasions)
- **Arabic UI Support**: Full RTL support with Arabic navigation labels

### 🎨 User Experience
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Responsive Design**: Mobile-first approach with collapsible navigation
- **Product Galleries**: Dynamic product showcases with collection grids
- **Call-to-Action Sections**: Professional marketing components

### 🛠️ Technical Features
- **Modern React 19**: Latest React features with hooks and concurrent rendering
- **Type-Safe Routing**: React Router v7 with organized route structure
- **Utility-First Styling**: Tailwind CSS for consistent, responsive design
- **Performance Optimized**: Vite build system for fast development and production

## 🏗️ Project Structure

```
gouchi/
├── public/
│   ├── storage/           # Product images and assets
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── header/        # Navigation components
│   │   │   ├── Header.jsx          # Main header with mega menus
│   │   │   ├── MegaMenu.jsx        # Universal mega menu component
│   │   │   ├── ProductGallery.jsx  # Product display grid
│   │   │   ├── CollectionsGrid.jsx # Collections showcase
│   │   │   └── SecondaryNavBar.jsx # Sub-section navigation tabs
│   │   └── [other components]/
│   ├── pages/             # Route-based page components
│   └── assets/            # Static assets
├── Documentation/         # Project documentation and plans
└── storage/              # Additional image assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JihedSouissi/gwaisha.git
   cd gouchi
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
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🛍️ Navigation Features

### Mega Menu System
The application features two comprehensive mega menus:

#### Categories Menu (`التصنيفات`)
- **Rings** - PANTHÈRE DE CARTIER, C DE CARTIER collections
- **Necklaces** - TRINITY, CARTIER LOSANGE collections
- **Bracelets** - LOVE, JUSTE UN CLOU collections

#### Gifts Menu (`هدايا`)
- **هدايا الزفاف** (Wedding Gifts) - Curated wedding jewelry selection
- **هدايا العيد** (Holiday Gifts) - Seasonal jewelry collections
- **هدايا الميلاد** (Birthday Gifts) - Birthday-appropriate pieces
- **هدايا خاصة** (Special Occasions) - Unique occasion jewelry

### Interactive Navigation
- Hover-activated mega menus with smooth transitions
- Secondary navigation tabs within each mega menu
- Automatic close on mouse leave with delay
- Mobile-responsive hamburger menu

## 🛠️ Tech Stack

### Frontend Framework
- **React 19** - Latest React with Concurrent Features
- **Vite** - Fast build tool and development server
- **React Router v7** - Modern client-side routing

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **PostCSS** - CSS processing tool

### Developer Experience
- **ESLint** - Code linting and formatting
- **TypeScript Definitions** - Type safety for React components

## 📁 Mega Menu Architecture

The mega menu system is built with modularity in mind:

1. **Header.jsx** - Contains mega menu data definitions and navigation structure
2. **MegaMenu.jsx** - Reusable mega menu component
3. **SecondaryNavBar.jsx** - Handles sub-section tab navigation
4. **ProductGallery.jsx** - Displays products in responsive grids
5. **CollectionsGrid.jsx** - Showcases brand collections

### Data Structure
```javascript
{
  megaMenu: {
    secondaryNav: [
      {
        text: "Category Name",
        href: "/category-route",
        products: [
          {
            name: "Product Name",
            description: "Product Description",
            image: "/image-path",
            href: "/product-link"
          }
        ]
      }
    ],
    collections: [...],
    inspiredLinks: [...]
  }
}
```

## 📖 Documentation

Additional project documentation is available in the `Documentation/` folder:
- `enhanced_mega_menu_plan.md` - Mega menu implementation details
- `header_restructure_plan.md` - Header component architecture
- `header_component_refactoring_plan.md` - Refactoring history

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using React, Vite, and modern web technologies.
