import React from "react";

function LoadingSpinner() {
  return (
    <div className="p-4 py-12 overflow-hidden text-center bg-white rounded-t-lg">
      <span className="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent cursor-not-allowed leading-6 transition duration-150 ease-in-out rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          disabled=""
        >
          <svg
            className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading
        </button>
      </span>
    </div>
  );
}

export default LoadingSpinner;
