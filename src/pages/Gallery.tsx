
import { useState } from 'react';
import { X } from 'lucide-react';

// Sample gallery images
const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1579745631855-2ba53dd6d995?q=80&w=1374&auto=format&fit=crop',
    alt: 'Sacred ritual items arranged for Shakti puja',
    category: 'Rituals'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1622482594949-a2297b8bcf32?q=80&w=1374&auto=format&fit=crop',
    alt: 'Ancient Shakti temple with intricate carvings',
    category: 'Temples'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1598454444604-f1af1bc27bd0?q=80&w=1374&auto=format&fit=crop',
    alt: 'Yantra pattern used in meditation',
    category: 'Symbols'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1604881987448-d0e7c6d8ef6d?q=80&w=1470&auto=format&fit=crop',
    alt: 'Community gathering for Navratri celebrations',
    category: 'Events'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?q=80&w=1374&auto=format&fit=crop',
    alt: 'Divine feminine statue adorned with flowers',
    category: 'Art'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1604848698030-c434ba08ece1?q=80&w=1374&auto=format&fit=crop',
    alt: 'Sacred flame from ceremonial fire ritual',
    category: 'Rituals'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1621502807175-dc56b123bc35?q=80&w=1374&auto=format&fit=crop',
    alt: 'Prayer flags at a mountain temple',
    category: 'Temples'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1475504852532-0ffb8585e113?q=80&w=1374&auto=format&fit=crop',
    alt: 'Offering of sacred flowers',
    category: 'Rituals'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1528870884180-5649b20f6435?q=80&w=1470&auto=format&fit=crop',
    alt: 'Sunrise meditation practice',
    category: 'Practices'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1470&auto=format&fit=crop',
    alt: 'Sanskrit manuscript with Shakti teachings',
    category: 'Texts'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1542448101-59fdbdaea3cc?q=80&w=1470&auto=format&fit=crop',
    alt: 'Modern Shakti energy artwork',
    category: 'Art'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1614361821250-9a0af975a0eb?q=80&w=1374&auto=format&fit=crop',
    alt: 'Annual Shakti devotees gathering',
    category: 'Events'
  }
];

const categories = ['All', 'Rituals', 'Temples', 'Symbols', 'Events', 'Art', 'Practices', 'Texts'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            VISUAL JOURNEY
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Sacred Imagery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of images representing the divine feminine energy in various forms.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-shakti-500 text-white'
                  : 'bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300 hover:bg-shakti-200 dark:hover:bg-shakti-800/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {/* Lightbox modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-shakti-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="max-w-4xl max-h-[90vh] relative">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-white">
                <p>{selectedImage.alt}</p>
                <span className="text-sm text-shakti-300">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
