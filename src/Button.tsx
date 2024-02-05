// Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  onClick?: () => void;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <Link to="/createfeedback">
      <button
        className={`py-2 px-4 bg-lilac rounded-lg mr-2  text-white font-jost text-sm font-bold leading-normal ${className}`}
        onClick={onClick}
      >
        + Add Feedback
      </button>
    </Link>
  );
};

export default Button;
