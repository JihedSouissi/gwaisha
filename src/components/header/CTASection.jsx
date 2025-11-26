import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const CTASection = ({ cta, onClose }) => {
  return (
    <motion.div
      className="flex justify-center py-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <Link
        to={cta.href}
        className="inline-flex items-center justify-center border border-black text-black bg-transparent px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
        onClick={() => onClose()}
      >
        {cta.text}
      </Link>
    </motion.div>
  );
};

export default CTASection;
