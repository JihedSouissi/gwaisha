import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CollectionsGrid from './CollectionsGrid';
import CTASection from './CTASection';
import ProductGallery from './ProductGallery';
import SecondaryNavBar from './SecondaryNavBar';
const MegaMenu = ({ megaMenuData, isOpen, onHover, onLeave }) => {
  const [activeContent, setActiveContent] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      // When the mega menu opens, default to the first item's content, if available
      if (megaMenuData.secondaryNav && megaMenuData.secondaryNav.length > 0) {
        setActiveContent(megaMenuData.secondaryNav[0]);
      } else {
        setActiveContent(null);
      }
    } else {
      // When starting to close, set closing state but keep current content
      setIsClosing(true);
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
      className="absolute top-full left-0 w-full h-auto bg-black bg-opacity-25 z-40"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className="bg-white w-full px-4 sm:px-6 lg:px-8 shadow-2xl border-t border-gray-200 py-4"
      >
        <SecondaryNavBar 
          links={megaMenuData.secondaryNav} 
          onLinkHover={handleLinkHover}
          activeLink={activeContent ? activeContent.text : null}
        />
        <div className="py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent?.href || 'default'}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
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
