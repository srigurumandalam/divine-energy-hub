
import React from 'react';
import { User } from 'lucide-react';

interface Discussion {
  id: number;
  topic: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  lastReply: string;
  category: string;
}

interface DiscussionListProps {
  discussions: Discussion[];
  onViewDiscussion: () => void;
}

const DiscussionList = ({ discussions, onViewDiscussion }: DiscussionListProps) => {
  return (
    <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-shakti-100 dark:divide-shakti-800">
          <thead className="bg-shakti-50 dark:bg-shakti-900/60">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Topic
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Author
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Replies
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Last Reply
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-shakti-900/40 divide-y divide-shakti-100 dark:divide-shakti-800">
            {discussions.map((discussion) => (
              <tr 
                key={discussion.id} 
                className="hover:bg-shakti-50 dark:hover:bg-shakti-900/60 transition-colors cursor-pointer"
                onClick={onViewDiscussion}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{discussion.topic}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Posted {discussion.date} • {discussion.views} views
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300">
                    {discussion.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-shakti-100 dark:bg-shakti-800/40 flex items-center justify-center">
                      <User className="h-4 w-4 text-shakti-500" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">{discussion.author}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {discussion.replies}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {discussion.lastReply}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiscussionList;
