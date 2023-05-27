import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";

const OrderByDropdown = ({ setOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Date");

  const options = ["Date", "Name", "Price"];

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setSelectedOption(option);
    setOrder(option.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleOpen}
        >
          {selectedOption}
          <FaSort className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Dropdown panel, show/hide based on dropdown state */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderByDropdown;
