
import React from 'react';
import { User } from 'lucide-react';

interface PostHeaderProps {
  topic: string;
  author: string;
  date: string;
  category: string;
  content: string;
  replyCount: number;
}

const PostHeader = ({ topic, author, date, category, content, replyCount }: PostHeaderProps) => {
  return (
    <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-serif font-medium">{topic}</h2>
        <span className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300">
          {category}
        </span>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-shakti-100 dark:bg-shakti-800/40 flex items-center justify-center">
          <User className="h-5 w-5 text-shakti-500" />
        </div>
        <div className="ml-3">
          <div className="text-sm font-medium">{author}</div>
          <div className="text-xs text-muted-foreground">Posted {date}</div>
        </div>
      </div>
      
      <div className="prose dark:prose-invert max-w-none mb-6">
        <p>{content}</p>
      </div>
      
      <div className="flex items-center text-sm text-muted-foreground">
        <User className="h-4 w-4 mr-1" />
        {replyCount} replies
      </div>
    </div>
  );
};

export default PostHeader;
