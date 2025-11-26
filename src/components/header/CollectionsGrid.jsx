const CollectionsGrid = ({ collections }) => {
  return (
    <div className="py-8 flex justify-center">
      <div className="grid grid-cols-6 gap-8">
        {collections.map((collection) => (
          <div key={collection.title} className="text-center">
            <div className="mb-4">
              <img src={collection.image} alt={collection.title} className="mx-auto" />
            </div>
            <h3 className="text-sm font-medium text-gray-800">{collection.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsGrid;
