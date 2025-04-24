import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      <div
        className="flex justify-between items-center cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-[12px] font-semibold">{title}</h3>
          {description && <p className="text-[8px] text-gray-400 mt-1">{description}</p>}
        </div>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>

      {isOpen && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
