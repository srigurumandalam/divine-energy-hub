
import React from 'react';
import { MessageSquare } from 'lucide-react';
import ReplyForm from './ReplyForm';
import PostHeader from './PostHeader';
import RepliesList from './RepliesList';

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
        
        <PostHeader
          topic={discussion.topic}
          author={discussion.author}
          date={discussion.date}
          category={discussion.category}
          content={discussion.content}
          replyCount={discussion.replies.length}
        />
      </div>
      
      <RepliesList replies={discussion.replies} />
      
      <ReplyForm replyText={replyText} onReplyChange={onReplyChange} />
    </>
  );
};

export default DiscussionDetail;
