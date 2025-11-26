import { useEffect, useState } from 'react';
import BeInspiredSection from './BeInspiredSection';
import CollectionsGrid from './CollectionsGrid';
import CTASection from './CTASection';
import ProductGallery from './ProductGallery';
import SecondaryNavBar from './SecondaryNavBar';
const MegaMenu = ({ megaMenuData, isOpen, onHover, onLeave }) => {
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    // When the mega menu opens, default to the first item's content, if available
    if (isOpen && megaMenuData.secondaryNav && megaMenuData.secondaryNav.length > 0) {
      setActiveContent(megaMenuData.secondaryNav[0]);
    } else {
      setActiveContent(null);
    }
  }, [isOpen, megaMenuData]);

  if (!isOpen) return null;

  const handleLinkHover = (link) => {
    setActiveContent(link);
  };

  const renderContent = () => {
    if (!activeContent || !activeContent.products || activeContent.products.length === 0) {
      return (
        <div className="flex flex-col items-center">
          <CollectionsGrid collections={megaMenuData.collections} />
          <BeInspiredSection links={megaMenuData.inspiredLinks} />
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center">
        <ProductGallery products={activeContent.products} />
      </div>
    );
  };

  return (
    <div
      className="absolute top-full left-0 w-full h-auto bg-black bg-opacity-25 z-40 flex justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div 
        className="bg-white w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl border-t border-gray-200"
        onMouseLeave={() => setActiveContent(null)} // Optionally reset on leaving the whole menu
      >
        <SecondaryNavBar 
          links={megaMenuData.secondaryNav} 
          onLinkHover={handleLinkHover}
          activeLink={activeContent ? activeContent.text : null}
        />
        <div className="py-4">
          {renderContent()}
          <CTASection 
            cta={{
              text: "DISCOVER MORE",
              href: "/collections"
            }}
            onClose={onLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
