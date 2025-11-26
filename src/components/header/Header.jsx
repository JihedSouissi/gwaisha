import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MegaMenu } from './';

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

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Header = () => {
  const navigationLinks = [
    { text: 'الرئيسية', href: '/' },
    {
      text: 'التصنيفات',
      href: '/categories',
      megaMenu: {
        secondaryNav: [
          {
            text: 'خواتم',
            href: '/categories/rings',
            products: [
              {
                name: 'PANTHÈRE DE CARTIER',
                description: 'RING',
                image: '/storage/products/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png',
                href: '/products/panthere-de-cartier-ring'
              },
              {
                name: 'C DE CARTIER',
                description: 'WEDDING BAND',
                image: '/storage/products/1253ed2ff53413044568feb3b3253c4903e81187.png',
                href: '/products/c-de-cartier-wedding-band'
              },
              {
                name: 'PANTHÈRE DOUBLE',
                description: 'RING',
                image: '/storage/products/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png',
                href: '/products/panthere-double-ring'
              },
              {
                name: 'PANTHÈRE GRAPHIQUE',
                description: 'RING',
                image: '/storage/products/a93e25ba794a4a98bfe892a8abff157eceb2d5af.png',
                href: '/products/panthere-graphique-ring'
              }
            ]
          },
          {
            text: 'قلائد',
            href: '/categories/necklaces',
            products: [
              {
                name: 'TRINITY',
                description: 'NECKLACE',
                image: '/storage/products/babc1df376cd99a99b42714f7f3c50bc5559cabd.png',
                href: '/products/trinity-necklace'
              },
              {
                name: 'CARTIER LOSANGE',
                description: 'NECKLACE',
                image: '/storage/products/dd189ebd41bdf06ac5ac5a693165b4d826c99593.png',
                href: '/products/cartier-losange-necklace'
              }
            ]
          },
          { text: 'أساور', href: '/categories/bracelets', products: [] },
        ],
        collections: [
          {
            title: 'PANTHÈRE DE CARTIER',
            image: '/storage/products/4a45d666e1ef236972d9ef25ac229e4a1f832e03.png'
          },
          {
            title: 'C DE CARTIER',
            image: '/storage/products/1253ed2ff53413044568feb3b3253c4903e81187.png'
          },
          {
            title: 'PANTHÈRE DOUBLE',
            image: '/storage/products/1264a634bb60a826e5e4fa0c9f7538c2ab3ab27f.png'
          },
          {
            title: 'PANTHÈRE GRAPHIQUE',
            image: '/storage/products/a93e25ba794a4a98bfe892a8abff157eceb2d5af.png'
          },
          {
            title: 'TRINITY',
            image: '/storage/products/babc1df376cd99a99b42714f7f3c50bc5559cabd.png'
          },
          {
            title: 'CARTIER LOSANGE',
            image: '/storage/products/dd189ebd41bdf06ac5ac5a693165b4d826c99593.png'
          }
        ],
        inspiredLinks: [
          { text: 'WISHLIST FOR HER', href: '#' },
          { text: 'PRECIOUS SUNGLASSES', href: '#' },
          { text: 'SET FOR YOU EYEWEAR', href: '#' },
          { text: 'HOME', href: '#' }
        ]
      }
    },
    { text: 'المجموعات', href: '#' },
    { text: 'للمجوهرات الراقية', href: '#' },
    { text: 'هدايا', href: '#' },
    { text: 'عروض حصرية', href: '#' },
    { text: 'أخبارنا', href: '#' },
    { text: 'قصة العلامة', href: '#' },
    { text: 'مركز الصيانة', href: '#' },
    { text: 'متاجرنا', href: '#' }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  let hoverTimeout;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsScrolled(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (megaMenuData) => {
    clearTimeout(hoverTimeout);
    setActiveMegaMenu(megaMenuData);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300); // 300ms delay
  };

  // Dynamic classes based on scroll state
  const headerClasses = isScrolled
    ? 'fixed bg-white shadow-md w-full z-50 transition-all duration-300 ease-in-out'
    : 'absolute bg-transparent shadow-none w-full z-20';

  const textColorClasses = isScrolled
    ? 'text-gray-900 hover:text-primary-red'
    : 'text-white hover:text-primary-red';

  const iconButtonClasses = isScrolled
    ? 'text-gray-900 hover:bg-gray-100 bg-transparent p-2 rounded'
    : 'text-white hover:bg-transparent bg-transparent p-2 rounded';

  return (
    <header 
      className={headerClasses} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Section: Logo Centered, Icons Left */}
      <div className="relative flex items-center px-4 py-3">
        {/* Icons - Left Side */}
        <div className="flex items-center space-x-2 sm:space-x-4 space-x-reverse">
          <button className={iconButtonClasses} aria-label="search">
            <SearchIcon />
          </button>
          <button className={iconButtonClasses} aria-label="person">
            <PersonOutlineIcon />
          </button>
          <button className={iconButtonClasses} aria-label="favorite">
            <FavoriteBorderIcon />
          </button>
          <button className={`${iconButtonClasses} relative`} aria-label="cart">
            <ShoppingBagOutlinedIcon />
            <span className="absolute top-0 right-0 bg-primary-red rounded-full w-4 h-4 flex items-center justify-center text-xs text-white z-10">
              0
            </span>
          </button>
        </div>

        {/* Logo - Center */}
        <div className="flex-grow flex justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
          <img 
            src="/storage/Logo.png" 
            alt="Logo" 
            className={`h-6 sm:h-7 md:h-8 transition-all duration-300 ${
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            }`} 
          />
        </div>

        {/* Mobile Menu Button - Right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className={`lg:hidden p-2 rounded z-30 ml-auto ${iconButtonClasses}`}
          aria-label="menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Divider Line - Not Full Width */}
      <div className="flex justify-center">
        <div className={`h-px w-32 ${
          isScrolled ? 'bg-gray-300' : 'bg-white bg-opacity-30'
        }`}></div>
      </div>

      {/* Bottom Section: All Navigation Links with Dropdowns */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center px-4 py-3">
          {/* Unified Navigation */}
          <nav className="flex gap-4 lg:gap-6">
            {navigationLinks.map((link) => (
              <div
                key={link.text}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.megaMenu)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 text-sm font-medium whitespace-nowrap ${textColorClasses}`}
                >
                  {link.text}
                  {link.megaMenu && <ChevronDownIcon />}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {activeMegaMenu && (
        <>
          <div 
            className="absolute top-full left-0 w-full h-2 bg-transparent"
            onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
            onMouseLeave={handleMouseLeave}
          />
          <MegaMenu 
            megaMenuData={activeMegaMenu}
            isOpen={true}
            onHover={() => handleMouseEnter(activeMegaMenu)}
            onLeave={handleMouseLeave}
          />
        </>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white bg-opacity-95 backdrop-blur-sm border-t border-gray-200">
          <nav className="flex flex-col px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
            <div className="space-y-2">
              <h3 className="text-gray-900 font-semibold text-sm mb-3">
                التنقل
              </h3>
              {navigationLinks.map((link) => (
                <Link
                  key={link.text}
                  to={link.href}
                  className="block py-2 text-base text-gray-900 hover:text-primary-red border-b border-gray-200 pb-3 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
