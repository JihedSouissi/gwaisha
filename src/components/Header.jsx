import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PersonOutlineIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const FavoriteBorderIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShoppingBagOutlinedIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const rightNavLinks = [
    { text: 'الرئيسية', href: '/' },
    { text: 'التصنيفات', href: '/categories' },
    { text: 'المجموعات', href: '#' },
    { text: 'للمجوهرات الراقية', href: '#' },
    { text: 'هدايا', href: '#' },
    { text: 'عروض حصرية', href: '#' },
    { text: 'أخبارنا', href: '#' },
  ];

  const leftNavLinks = [
    { text: 'قصة العلامة', href: '#' },
    { text: 'مركز الصيانة', href: '#' },
    { text: 'متاجرنا', href: '#' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="absolute bg-transparent shadow-none w-full z-20">
      <div className="relative flex items-center px-4 py-2">
        {/* Desktop Navigation - Left */}
        <div className="hidden lg:flex flex-grow justify-start">
          <nav className="flex gap-4 lg:gap-6 overflow-x-auto">
            {rightNavLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className="text-sm font-medium text-white hover:text-primary-red whitespace-nowrap flex-shrink-0"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Logo */}
        <div className="flex-grow flex justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
          <img src="/storage/Logo.png" alt="Logo" className="h-6 sm:h-7 md:h-8" />
        </div>

        {/* Desktop Navigation - Right */}
        <div className="hidden lg:flex flex-grow justify-end">
          <nav className="flex gap-4 lg:gap-6 overflow-x-auto">
            {leftNavLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className="text-sm font-medium text-white hover:text-primary-red whitespace-nowrap flex-shrink-0"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded z-30"
          aria-label="menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4 space-x-reverse ml-auto">
          <button className="text-white hover:bg-transparent bg-transparent p-2 rounded" aria-label="search">
            <SearchIcon />
          </button>
          <button className="text-white hover:bg-transparent bg-transparent p-2 rounded" aria-label="person">
            <PersonOutlineIcon />
          </button>
          <button className="text-white hover:bg-transparent bg-transparent p-2 rounded" aria-label="favorite">
            <FavoriteBorderIcon />
          </button>
          <button className="text-white hover:bg-transparent bg-transparent p-2 rounded relative" aria-label="cart">
            <ShoppingBagOutlinedIcon />
            <span className="absolute top-0 right-0 bg-primary-red rounded-full w-4 h-4 flex items-center justify-center text-xs text-white z-10">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black-bg bg-opacity-95 backdrop-blur-sm border-t border-gray-600">
          <nav className="flex flex-col px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
            <div className="space-y-2">
              <h3 className="text-white font-semibold text-sm mb-3">التنقل</h3>
              {rightNavLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.href}
                  className="block text-white hover:text-primary-red py-2 text-base border-b border-gray-700 pb-3 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-600 pt-4 space-y-2">
              <h3 className="text-white font-semibold text-sm mb-3">الشركة</h3>
              {leftNavLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.href}
                  className="block text-white hover:text-primary-red py-2 text-base border-b border-gray-700 pb-3 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
