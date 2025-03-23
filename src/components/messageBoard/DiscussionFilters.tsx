
import React from 'react';

interface DiscussionFiltersProps {
  onStartNewDiscussion: () => void;
}

const DiscussionFilters = ({ onStartNewDiscussion }: DiscussionFiltersProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-between items-center gap-4">
      <div className="flex flex-wrap gap-2">
        <button className="py-2 px-4 rounded-full text-sm font-medium bg-shakti-500 text-white">
          All Discussions
        </button>
        <button className="py-2 px-4 rounded-full text-sm font-medium bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200">
          Latest
        </button>
        <button className="py-2 px-4 rounded-full text-sm font-medium bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200">
          Popular
        </button>
      </div>
      <button 
        onClick={onStartNewDiscussion}
        className="py-2 px-4 rounded-full text-sm font-medium bg-shakti-500 text-white hover:bg-shakti-600 transition-colors"
      >
        Start New Discussion
      </button>
    </div>
  );
};

export default DiscussionFilters;
