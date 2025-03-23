
import React from 'react';
import { User } from 'lucide-react';

interface Reply {
  id: number;
  author: string;
  date: string;
  content: string;
}

interface RepliesListProps {
  replies: Reply[];
}

const RepliesList = ({ replies }: RepliesListProps) => {
  if (replies.length === 0) {
    return (
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-4">Replies</h3>
        <p className="text-muted-foreground">No replies yet. Be the first to respond!</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 mb-10">
      <h3 className="text-xl font-medium">Replies</h3>
      
      {replies.map((reply) => (
        <div key={reply.id} className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden p-6 border-l-2 border-shakti-500">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-shakti-100 dark:bg-shakti-800/40 flex items-center justify-center">
              <User className="h-5 w-5 text-shakti-500" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium">{reply.author}</div>
              <div className="text-xs text-muted-foreground">{reply.date}</div>
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>{reply.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepliesList;
