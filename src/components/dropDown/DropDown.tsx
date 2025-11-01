import "./dropDown.scss";
import type { ReactElement, ReactNode } from "react";

interface DropDownProps {
  question: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function DropDown({ 
  question, 
  children, 
  isOpen, 
  onToggle, 
  className = "" 
}: DropDownProps): ReactElement {
  const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`dropDownItem ${isOpen ? 'open' : ''} ${className}`}>
      <dt>
        <button 
          className="dropDownQuestion"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={dropdownId}
        >
          <span>{question}</span>
          <span className="dropDownIcon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </dt>
      <dd 
        id={dropdownId}
        className="dropDownAnswer"
        role="region"
        aria-labelledby={`${dropdownId}-question`}
      >
        <div className="dropDownContent">
          {children}
        </div>
      </dd>
    </div>
  );
}