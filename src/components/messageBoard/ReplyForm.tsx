
import React from 'react';
import { Send } from 'lucide-react';

interface ReplyFormProps {
  replyText: string;
  onReplyChange: (text: string) => void;
}

const ReplyForm = ({ replyText, onReplyChange }: ReplyFormProps) => {
  return (
    <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden p-6">
      <h3 className="text-xl font-medium mb-4">Leave a Reply</h3>
      
      <textarea
        value={replyText}
        onChange={(e) => onReplyChange(e.target.value)}
        className="w-full px-4 py-3 border border-shakti-200 dark:border-shakti-800 rounded-lg focus:ring-2 focus:ring-shakti-500 focus:border-transparent resize-none dark:bg-shakti-900/20"
        rows={5}
        placeholder="Share your thoughts or questions..."
      ></textarea>
      
      <div className="mt-4 flex justify-end">
        <button className="py-2 px-6 rounded-full bg-shakti-500 text-white hover:bg-shakti-600 transition-colors flex items-center">
          Submit Reply
          <Send className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ReplyForm;
