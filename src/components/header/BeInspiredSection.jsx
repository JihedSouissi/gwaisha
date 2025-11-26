import { Link } from 'react-router-dom';

const BeInspiredSection = ({ links }) => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-6">BE INSPIRED</h3>
        <div className="flex justify-center gap-8">
          {links.map((link) => (
            <Link key={link.text} to={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900">
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeInspiredSection;
