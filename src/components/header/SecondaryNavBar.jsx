import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SecondaryNavBar = ({ links, onLinkHover, activeLink }) => {
  return (
    <div>
      <nav className="flex items-center justify-center gap-6 flex-wrap">
        {links.map((link, index) => (
          <motion.div
            key={link.text}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Link
              to={link.href}
              className={`py-4 text-lg font-medium transition-colors duration-300 ${
                activeLink === link.text
                  ? 'text-primary-red border-b-2 border-primary-red'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onMouseEnter={() => onLinkHover(link)}
            >
              {link.text}
            </Link>
          </motion.div>
        ))}
      </nav>
    </div>
  );
};

export default SecondaryNavBar;
