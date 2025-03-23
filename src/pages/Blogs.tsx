
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding the Nine Forms of Shakti',
    excerpt: 'Explore the symbolism and significance behind the Navadurga, the nine manifestations of divine feminine energy.',
    date: 'May 12, 2024',
    category: 'Philosophy',
    image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Practical Energy Meditation Techniques',
    excerpt: 'Learn simple yet powerful meditation practices to connect with and channel Shakti energy in your daily life.',
    date: 'April 28, 2024',
    category: 'Practices',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1498&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Science Behind Kundalini Awakening',
    excerpt: 'A modern perspective on how the ancient understanding of Kundalini energy aligns with contemporary neuroscience.',
    date: 'April 15, 2024',
    category: 'Modern Insights',
    image: 'https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Sacred Geometry in Shakti Yantra',
    excerpt: 'Discover how geometric patterns in Shakti yantras represent cosmic principles and energy configurations.',
    date: 'March 30, 2024',
    category: 'Symbolism',
    image: 'https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1380&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'The Role of Divine Feminine in Modern Spirituality',
    excerpt: 'How the resurgence of feminine energy awareness is reshaping contemporary spiritual movements worldwide.',
    date: 'March 18, 2024',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1532570204713-c72529397165?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Mantras for Awakening Inner Shakti',
    excerpt: 'A guide to sacred sound formulas specifically designed to activate and harmonize with different aspects of divine energy.',
    date: 'March 5, 2024',
    category: 'Practices',
    image: 'https://images.unsplash.com/photo-1572747677531-85e61da5e875?q=80&w=1374&auto=format&fit=crop'
  }
];

const Blogs = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            WISDOM RESOURCES
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Blogs & Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore insights, practices, and teachings related to Shaktham and divine feminine energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block py-1 px-3 bg-white/80 dark:bg-shakti-900/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                <h2 className="font-serif text-xl font-medium mb-3">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <a 
                  href={`/blogs/${post.id}`} 
                  className="inline-flex items-center text-shakti-500 hover:text-shakti-600 font-medium"
                >
                  Read more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#" 
            className="rounded-full bg-shakti-100 dark:bg-shakti-800/40 px-6 py-3 text-shakti-600 dark:text-shakti-300 hover:bg-shakti-200 dark:hover:bg-shakti-800/60 transition-all duration-300"
          >
            Load More Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
