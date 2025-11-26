import { Link } from 'react-router-dom';

const ArrowLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const CTASection = ({ cta, onClose }) => {
  return (
    <div className="flex justify-center py-4 border-t border-gray-200">
      <Link
        to={cta.href}
        className="inline-flex items-center gap-2 bg-primary-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
        onClick={() => onClose()}
      >
        {cta.text}
        <ArrowLeftIcon />
      </Link>
    </div>
  );
};

export default CTASection;
