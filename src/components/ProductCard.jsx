const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 sm:p-4 text-center">
        <h3 className="font-graphik-arabic text-base sm:text-lg font-semibold text-black-bg mb-2 leading-tight">
          {product.title}
        </h3>
        <p className="font-graphik-arabic text-lg sm:text-xl font-bold text-primary-red">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export { ProductCard };
