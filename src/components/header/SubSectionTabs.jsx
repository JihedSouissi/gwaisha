const SubSectionTabs = ({ sections, activeIndex, onTabHover, onTabClick }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex gap-4 lg:gap-6 bg-gray-50 rounded-lg p-2">
        {sections.map((section, sectionIndex) => (
          <button
            key={sectionIndex}
            onMouseEnter={() => onTabHover(sectionIndex)}
            onClick={() => onTabClick(sectionIndex)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeIndex === sectionIndex
                ? 'bg-primary-red text-white'
                : 'text-gray-700 hover:text-primary-red hover:bg-gray-100'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubSectionTabs;
