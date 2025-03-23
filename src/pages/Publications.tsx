
import { Book, Download } from 'lucide-react';

// Sample publications data
const publications = [
  {
    id: 1,
    title: 'Awakening the Goddess Within',
    author: 'Dr. Radha Krishnan',
    cover: 'https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?q=80&w=1374&auto=format&fit=crop',
    description: 'A comprehensive guide to connecting with and embodying the divine feminine energy in everyday life.',
    year: 2022,
    type: 'Book',
    pages: 286,
    tags: ['Spirituality', 'Self-Development', 'Divine Feminine']
  },
  {
    id: 2,
    title: 'Shakti Meditations: A Practical Guide',
    author: 'Maya Devi & Arjun Kumar',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop',
    description: 'Step-by-step instructions for 21 powerful meditation techniques focusing on different aspects of divine energy.',
    year: 2021,
    type: 'Book',
    pages: 194,
    tags: ['Meditation', 'Practices', 'Energy Work']
  },
  {
    id: 3,
    title: 'Journal of Shakti Studies: Volume 4',
    author: 'Various Contributors',
    cover: 'https://images.unsplash.com/photo-1531071222863-f16d9d9c2be3?q=80&w=1374&auto=format&fit=crop',
    description: 'A collection of academic articles exploring the historical development and contemporary relevance of Shakti traditions.',
    year: 2023,
    type: 'Journal',
    pages: 122,
    tags: ['Academic', 'Research', 'Contemporary']
  },
  {
    id: 4,
    title: 'Sacred Symbols of the Divine Feminine',
    author: 'Lakshmi Sharma',
    cover: 'https://images.unsplash.com/photo-1629189858242-821f5ea42de3?q=80&w=1374&auto=format&fit=crop',
    description: 'An illustrated guide to the yantras, mandalas, and visual representations of Shakti energy throughout history.',
    year: 2020,
    type: 'Book',
    pages: 208,
    tags: ['Symbolism', 'Visual Arts', 'Tradition']
  },
  {
    id: 5,
    title: 'Modern Applications of Ancient Energy Practices',
    author: 'Dr. Sanjay Gupta',
    cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1470&auto=format&fit=crop',
    description: 'Integrating traditional Shakti wisdom with contemporary scientific understanding for healing and transformation.',
    year: 2023,
    type: 'E-Book',
    pages: 156,
    tags: ['Science', 'Integration', 'Healing']
  },
  {
    id: 6,
    title: 'Shakti Mantras: The Power of Sacred Sound',
    author: 'Vidya Rao',
    cover: 'https://images.unsplash.com/photo-1534370421041-2e39abb2446f?q=80&w=1374&auto=format&fit=crop',
    description: 'A comprehensive collection of mantras dedicated to various aspects of the divine feminine, with pronunciations and meanings.',
    year: 2019,
    type: 'Book',
    pages: 172,
    tags: ['Mantras', 'Sound', 'Practice']
  }
];

const Publications = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            KNOWLEDGE RESOURCES
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Publications & Books</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of books, journals, and resources on Shaktham and divine feminine energy.
          </p>
        </div>
        
        {/* Featured Publication */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-medium mb-6">Featured Publication</h2>
          <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src={publications[0].cover}
                  alt={publications[0].title}
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium text-shakti-700 dark:text-shakti-300">
                      {publications[0].type}
                    </span>
                    <span className="text-muted-foreground">{publications[0].year}</span>
                  </div>
                  <h2 className="text-2xl font-serif font-medium">{publications[0].title}</h2>
                  <p className="text-muted-foreground">by {publications[0].author}</p>
                </div>
                <p className="mb-6">{publications[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {publications[0].tags.map((tag, index) => (
                    <span key={index} className="py-1 px-3 bg-shakti-50 dark:bg-shakti-900/20 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <Book className="inline-block w-4 h-4 mr-1" />
                    {publications[0].pages} pages
                  </div>
                  <a 
                    href="#" 
                    className="rounded-full bg-shakti-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 transition-all duration-300 flex items-center"
                  >
                    Learn More <Download className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Publications */}
        <div>
          <h2 className="text-2xl font-serif font-medium mb-6">All Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.slice(1).map((publication) => (
              <div 
                key={publication.id} 
                className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={publication.cover} 
                    alt={publication.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block py-1 px-3 bg-white/80 dark:bg-shakti-900/80 backdrop-blur-sm rounded-full text-xs font-medium">
                      {publication.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{publication.title}</h3>
                    <span className="text-sm text-muted-foreground">{publication.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">by {publication.author}</p>
                  <p className="text-sm mb-4 line-clamp-3">{publication.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      <Book className="inline-block w-3 h-3 mr-1" />
                      {publication.pages} pages
                    </div>
                    <a 
                      href="#" 
                      className="text-sm text-shakti-500 hover:text-shakti-600 font-medium"
                    >
                      Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* E-Resources Section */}
        <div className="mt-16 p-8 bg-shakti-100/30 dark:bg-shakti-900/20 rounded-xl text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Digital Resources</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Access our collection of free ebooks, PDFs, and digital resources to deepen your understanding of Shaktham practices.
          </p>
          <a 
            href="#" 
            className="rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 transition-all duration-300 inline-flex items-center"
          >
            Browse Digital Library <Download className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Publications;
