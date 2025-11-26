import { Link } from 'react-router-dom';

const SecondaryNavBar = ({ links, onLinkHover, activeLink }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex items-center justify-center gap-6 flex-wrap">
        {links.map((link) => (
          <Link
            key={link.text}
            to={link.href}
            className={`py-4 text-sm font-medium transition-colors duration-300 ${
              activeLink === link.text
                ? 'text-primary-red border-b-2 border-primary-red'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onMouseEnter={() => onLinkHover(link)}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SecondaryNavBar;
