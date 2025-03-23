
import React from 'react';
import { User, MessageSquare } from 'lucide-react';
import ReplyForm from './ReplyForm';

interface Reply {
  id: number;
  author: string;
  date: string;
  content: string;
}

interface ActiveDiscussion {
  id: number;
  topic: string;
  author: string;
  date: string;
  category: string;
  content: string;
  replies: Reply[];
}

interface DiscussionDetailProps {
  discussion: ActiveDiscussion;
  onBackToList: () => void;
  replyText: string;
  onReplyChange: (text: string) => void;
}

const DiscussionDetail = ({ 
  discussion, 
  onBackToList,
  replyText,
  onReplyChange
}: DiscussionDetailProps) => {
  return (
    <>
      <div className="mb-6">
        <button 
          onClick={onBackToList} 
          className="mb-4 py-2 px-4 rounded-full text-sm font-medium bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200 transition-colors flex items-center"
        >
          ← Back to Discussions
        </button>
        
        <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-serif font-medium">{discussion.topic}</h2>
            <span className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300">
              {discussion.category}
            </span>
          </div>
          
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-shakti-100 dark:bg-shakti-800/40 flex items-center justify-center">
              <User className="h-5 w-5 text-shakti-500" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium">{discussion.author}</div>
              <div className="text-xs text-muted-foreground">Posted {discussion.date}</div>
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none mb-6">
            <p>{discussion.content}</p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MessageSquare className="h-4 w-4 mr-1" />
            {discussion.replies.length} replies
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mb-10">
        <h3 className="text-xl font-medium">Replies</h3>
        
        {discussion.replies.map((reply) => (
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
      
      <ReplyForm replyText={replyText} onReplyChange={onReplyChange} />
    </>
  );
};

export default DiscussionDetail;
