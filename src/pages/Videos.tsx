
import { Play } from 'lucide-react';

// Sample videos data
const videos = [
  {
    id: 1,
    title: 'Introduction to Shakti Meditation',
    description: 'Learn the basics of connecting with divine feminine energy through focused meditation techniques.',
    thumbnail: 'https://images.unsplash.com/photo-1516825728073-2eb144afcef2?q=80&w=1476&auto=format&fit=crop',
    duration: '15:24',
    date: 'June 2, 2024',
    category: 'Practices'
  },
  {
    id: 2,
    title: 'Understanding the Chakras and Energy Flow',
    description: 'An in-depth exploration of the seven major energy centers and how they relate to Shakti energy.',
    thumbnail: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?q=80&w=1470&auto=format&fit=crop',
    duration: '28:45',
    date: 'May 24, 2024',
    category: 'Philosophy'
  },
  {
    id: 3,
    title: 'Annual Navratri Celebration Highlights',
    description: 'Highlights from our community celebration of the nine nights dedicated to different forms of Shakti.',
    thumbnail: 'https://images.unsplash.com/photo-1504152781760-21e13240feb8?q=80&w=1470&auto=format&fit=crop',
    duration: '42:10',
    date: 'May 15, 2024',
    category: 'Events'
  },
  {
    id: 4,
    title: 'Interview with Shakti Practitioner Maya Devi',
    description: 'An inspiring conversation with a lifelong practitioner about her personal journey with Shaktham.',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1374&auto=format&fit=crop',
    duration: '53:21',
    date: 'May 8, 2024',
    category: 'Interviews'
  },
  {
    id: 5,
    title: 'Sacred Chants for Awakening Divine Energy',
    description: 'Experience the transformative power of traditional Sanskrit mantras dedicated to Shakti.',
    thumbnail: 'https://images.unsplash.com/photo-1571249621171-d288c5d68b2a?q=80&w=1470&auto=format&fit=crop',
    duration: '34:56',
    date: 'April 29, 2024',
    category: 'Chants'
  },
  {
    id: 6,
    title: 'The Scientific Perspective on Energy Practices',
    description: 'Modern research findings on the physiological and psychological effects of Shakti meditation.',
    thumbnail: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1470&auto=format&fit=crop',
    duration: '46:33',
    date: 'April 18, 2024',
    category: 'Modern Insights'
  }
];

const featuredVideo = videos[0];

const Videos = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            VISUAL TEACHINGS
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Video Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of teachings, practices, and event recordings related to Shaktham.
          </p>
        </div>
        
        {/* Featured video */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-medium mb-6">Featured Video</h2>
          <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
            <div className="relative aspect-video hover:scale-[1.01] transition-transform duration-300">
              <img 
                src={featuredVideo.thumbnail} 
                alt={featuredVideo.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-shakti-500/90 flex items-center justify-center transition-all duration-300 group-hover:bg-shakti-600 group-hover:scale-110">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 py-1 px-3 bg-black/70 text-white text-sm rounded-md">
                {featuredVideo.duration}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="inline-block py-1 px-2 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300 mb-2">
                    {featuredVideo.category}
                  </span>
                  <h3 className="text-xl font-serif font-medium">{featuredVideo.title}</h3>
                </div>
                <span className="text-sm text-muted-foreground">{featuredVideo.date}</span>
              </div>
              <p className="text-muted-foreground">{featuredVideo.description}</p>
            </div>
          </div>
        </div>
        
        {/* Video grid */}
        <div>
          <h2 className="text-2xl font-serif font-medium mb-6">All Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-shakti-500/90 flex items-center justify-center transition-all duration-300 hover:bg-shakti-600 hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 py-1 px-2 bg-black/70 text-white text-xs rounded-md">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block py-1 px-2 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300">
                      {video.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{video.date}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Load more button */}
        <div className="mt-12 text-center">
          <button className="rounded-full bg-shakti-100 dark:bg-shakti-800/40 px-6 py-3 text-shakti-600 dark:text-shakti-300 hover:bg-shakti-200 dark:hover:bg-shakti-800/60 transition-all duration-300">
            Load More Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Videos;
