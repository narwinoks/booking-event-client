import React from "react";

const Header = ({ active }) => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`${
                    active === 1 ? "bg-gray-900 text-white " : "text-gray-300"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className={`${
                    active === 2 ? "bg-gray-900 text-white" : "text-gray-300"
                  }  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Team
                </a>
                <a
                  href="#"
                  className={`${
                    active === 3 ? "bg-gray-900 text-white" : "text-gray-300"
                  }  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className={`${
                    active === 4 ? "bg-gray-900 text-white" : "text-gray-300"
                  }  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <form className="w-full max-w-sm">
              <div className="flex items-center  py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </form>
            <button className="ml-4 flex-shrink-0 bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
              Log in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
