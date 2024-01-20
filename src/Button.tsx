import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/createfeedback">
      <button className="py-2 px-4 bg-lilac rounded-lg mr-2 text-white font-jost text-sm font-bold leading-normal">+ Add Feedback</button>
    </Link>
  );
};

export default Button;
