
import { useState } from 'react';
import { discussions, activeDiscussion } from '../components/messageBoard/data';
import DiscussionList from '../components/messageBoard/DiscussionList';
import Pagination from '../components/messageBoard/Pagination';
import DiscussionFilters from '../components/messageBoard/DiscussionFilters';
import DiscussionDetail from '../components/messageBoard/DiscussionDetail';

const MessageBoard = () => {
  const [view, setView] = useState<'list' | 'discussion'>('list');
  const [replyText, setReplyText] = useState('');
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            COMMUNITY
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Message Board</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow practitioners and share your experiences, questions, and insights.
          </p>
        </div>
        
        {view === 'list' ? (
          <>
            <DiscussionFilters onStartNewDiscussion={() => {}} />
            <DiscussionList 
              discussions={discussions}
              onViewDiscussion={() => setView('discussion')}
            />
            <Pagination />
          </>
        ) : (
          <DiscussionDetail 
            discussion={activeDiscussion}
            onBackToList={() => setView('list')}
            replyText={replyText}
            onReplyChange={setReplyText}
          />
        )}
      </div>
    </div>
  );
};

export default MessageBoard;
