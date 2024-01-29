// Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  onClick?: () => void; // Make onClick prop optional
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Link to="/createfeedback">
      <button
        className="py-2 px-4 bg-lilac rounded-lg mr-2 text-white font-jost text-sm font-bold leading-normal"
        onClick={onClick} // Pass onClick prop to the button element
      >
        + Add Feedback
      </button>
    </Link>
  );
};

export default Button;
