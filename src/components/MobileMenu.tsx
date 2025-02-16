import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function MobileMenu({ sections, activeSection, onSectionClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 px-6 space-y-4 transition-all">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === section
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}