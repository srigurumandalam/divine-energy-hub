
import { useState } from 'react';
import { User, MessageSquare, Send } from 'lucide-react';

// Sample messages data
const discussions = [
  {
    id: 1,
    topic: 'Experiences with Shakti Meditation',
    author: 'Maya Devi',
    date: '2 days ago',
    replies: 24,
    views: 156,
    lastReply: '3 hours ago',
    category: 'Practices'
  },
  {
    id: 2,
    topic: 'Understanding the Symbolism in Shakti Yantras',
    author: 'Arjun Kumar',
    date: '5 days ago',
    replies: 18,
    views: 103,
    lastReply: '1 day ago',
    category: 'Symbolism'
  },
  {
    id: 3,
    topic: 'Recommended Books for Beginners',
    author: 'Sarah Johnson',
    date: '1 week ago',
    replies: 32,
    views: 208,
    lastReply: '12 hours ago',
    category: 'Resources'
  },
  {
    id: 4,
    topic: 'Integrating Shakti Practices in Daily Life',
    author: 'David Chen',
    date: '2 weeks ago',
    replies: 45,
    views: 312,
    lastReply: '3 days ago',
    category: 'Lifestyle'
  },
  {
    id: 5,
    topic: 'Question About Energy Blockages',
    author: 'Priya Sharma',
    date: '3 weeks ago',
    replies: 27,
    views: 176,
    lastReply: '4 days ago',
    category: 'Questions'
  }
];

// Sample active discussion
const activeDiscussion = {
  id: 1,
  topic: 'Experiences with Shakti Meditation',
  author: 'Maya Devi',
  date: '2 days ago',
  category: 'Practices',
  content: 'Hi everyone, I've been practicing Shakti meditation for about 3 months now, and I've noticed some interesting changes in my energy levels and overall sense of balance. I'm curious to hear about others' experiences, particularly regarding any physical sensations or insights you've had during your practice. Have you noticed any patterns related to time of day, moon phases, or other external factors? Looking forward to learning from your journeys!',
  replies: [
    {
      id: 1,
      author: 'Arjun Kumar',
      date: '2 days ago',
      content: 'Thanks for starting this discussion, Maya! In my experience, morning meditations (particularly around sunrise) have been most powerful for Shakti practices. I definitely notice stronger energy flows during the waxing moon phase, especially approaching full moon. One interesting pattern I've observed is that my crown chakra sensations are much more pronounced when I practice outdoors, especially near flowing water. Anyone else notice environmental factors influencing their practice?'
    },
    {
      id: 2,
      author: 'Sarah Johnson',
      date: '1 day ago',
      content: 'I've been practicing for about a year now, and the biggest change I've noticed is in my dream states. They've become much more vivid and often contain symbolic guidance that relates to challenges I'm facing in waking life. As for physical sensations, I sometimes experience a pleasant warmth flowing up my spine during deeper sessions. I've found that using a specific mantra consistently has strengthened these experiences over time.'
    },
    {
      id: 3,
      author: 'David Chen',
      date: '1 day ago',
      content: 'My experience has been that consistency matters more than duration. Even 15 minutes daily has produced more noticeable effects than longer sessions done sporadically. I've also found that incorporating subtle movements (similar to very slow tai chi) has helped me maintain awareness of the energy flow when my mind starts to wander. Maya, have you experimented with different postures during your practice?'
    }
  ]
};

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
            {/* Discussion List */}
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
              <button className="py-2 px-4 rounded-full text-sm font-medium bg-shakti-500 text-white hover:bg-shakti-600 transition-colors">
                Start New Discussion
              </button>
            </div>
            
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
                        onClick={() => setView('discussion')}
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
            
            {/* Pagination */}
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
          </>
        ) : (
          <>
            {/* Active Discussion */}
            <div className="mb-6">
              <button 
                onClick={() => setView('list')} 
                className="mb-4 py-2 px-4 rounded-full text-sm font-medium bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200 transition-colors flex items-center"
              >
                ← Back to Discussions
              </button>
              
              <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-serif font-medium">{activeDiscussion.topic}</h2>
                  <span className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300">
                    {activeDiscussion.category}
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-shakti-100 dark:bg-shakti-800/40 flex items-center justify-center">
                    <User className="h-5 w-5 text-shakti-500" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">{activeDiscussion.author}</div>
                    <div className="text-xs text-muted-foreground">Posted {activeDiscussion.date}</div>
                  </div>
                </div>
                
                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p>{activeDiscussion.content}</p>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {activeDiscussion.replies.length} replies
                </div>
              </div>
            </div>
            
            {/* Replies */}
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-medium">Replies</h3>
              
              {activeDiscussion.replies.map((reply) => (
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
            
            {/* Reply Form */}
            <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden p-6">
              <h3 className="text-xl font-medium mb-4">Leave a Reply</h3>
              
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default MessageBoard;
