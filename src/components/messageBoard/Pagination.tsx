
import React from 'react';

const Pagination = () => {
  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-2">
        <button className="px-3 py-2 rounded-md bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200">
          Previous
        </button>
        <button className="px-3 py-2 rounded-md bg-shakti-500 text-white">
          1
        </button>
        <button className="px-3 py-2 rounded-md bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200">
          2
        </button>
        <button className="px-3 py-2 rounded-md bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200">
          3
        </button>
        <button className="px-3 py-2 rounded-md bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200">
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
