import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductGallery = ({ products }) => {
  return (
    <div className="bg-white py-8 h-[400px] flex items-center justify-center">
      <div className="grid grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <Link to={product.href} className="text-center group">
              <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary-red transition-colors duration-300 truncate">{product.name}</h3>
              <p className="text-xs text-gray-500 truncate">{product.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
