
import { motion } from 'framer-motion';

const CollectionsGrid = ({ collections }) => {
  return (
    <div className="py-8 flex justify-center">
      <div className="grid grid-cols-6 gap-8">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.title}
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="mb-4">
              <img src={collection.image} alt={collection.title} className="mx-auto" />
            </div>
            <h3 className="text-sm font-medium text-gray-800">{collection.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsGrid;
