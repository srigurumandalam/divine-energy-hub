
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Sample data for guru lineage
const gurus = [
  {
    id: 1,
    name: 'Sri Adi Shankaracharya',
    period: '788-820 CE',
    description: 'The great philosopher who revived Advaita Vedanta and composed numerous works on non-dualistic philosophy. Though primarily associated with Advaita, his works on Shakti worship form a cornerstone of later Shaktham development.',
    contributions: [
      'Established the philosophical foundation for Shaktham',
      'Composed the famous Soundarya Lahari, a devotional hymn to the Divine Mother',
      'Harmonized Shakti worship with Vedantic non-dualism'
    ],
    image: 'https://images.unsplash.com/photo-1599752995679-5e9fb7415681?q=80&w=1469&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sri Abhinavagupta',
    period: '950-1020 CE',
    description: 'A brilliant philosopher, mystic and aesthetician of Kashmir Shaivism who expanded upon the relationship between consciousness and energy. His extensive works provide profound insights into the nature of Shakti.',
    contributions: [
      'Authored Tantraloka, a comprehensive explanation of tantra and Shakti principles',
      'Developed the philosophy of recognition (Pratyabhijna) with energy at its core',
      'Integrated aesthetics, philosophy and spiritual practice'
    ],
    image: 'https://images.unsplash.com/photo-1595409991559-77803d2bc7c3?q=80&w=1480&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Akka Mahadevi',
    period: '12th century CE',
    description: 'A remarkable woman saint and poet who embodied the divine feminine in her life and works. Her poems express profound devotion and the experience of union with the divine energy.',
    contributions: [
      'Composed Vachanas (poetic expressions) celebrating the divine energy',
      'Lived as a radical example of freedom from social conventions',
      'Demonstrated the path of absolute surrender to the divine feminine'
    ],
    image: 'https://images.unsplash.com/photo-1643310879797-78855592163e?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Sri Vidyaranya',
    period: '1296-1386 CE',
    description: 'A sage who systematized various Shakti practices and compiled important texts on meditation and worship. His contributions were crucial for preserving and transmitting Shakti traditions.',
    contributions: [
      'Codified important Shakti meditation practices',
      'Established systematic approaches to mantra and yantra',
      'Preserved ancient knowledge through written compilations'
    ],
    image: 'https://images.unsplash.com/photo-1610526778920-453feaa5934a?q=80&w=1473&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Sri Ramakrishna Paramahamsa',
    period: '1836-1886 CE',
    description: 'A mystic who realized the divine truth through the path of Shakti worship before exploring other spiritual traditions. His direct experiences with the Divine Mother as Kali demonstrate the living tradition of Shaktham.',
    contributions: [
      'Revitalized Shakti worship in the modern era',
      'Demonstrated the validity of divine feminine worship through direct experience',
      'Showed the harmony between Shaktham and other spiritual paths'
    ],
    image: 'https://images.unsplash.com/photo-1599748739720-6ac292ec0ddd?q=80&w=1470&auto=format&fit=crop'
  },
];

const GuruLineage = () => {
  const [selectedGuru, setSelectedGuru] = useState(gurus[0]);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            GURU PARAMPARA
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">The Sacred Lineage</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the unbroken chain of spiritual masters who have preserved and transmitted the wisdom of Shaktham through generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="font-serif text-2xl font-medium mb-4">Masters of Shakti</h2>
                <p className="text-muted-foreground mb-6">
                  Each of these enlightened beings has contributed uniquely to the tradition of Shaktham, preserving its essence while adapting it to their times.
                </p>
                <div className="space-y-3">
                  {gurus.map((guru) => (
                    <button
                      key={guru.id}
                      onClick={() => setSelectedGuru(guru)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg transition-all duration-300",
                        guru.id === selectedGuru.id
                          ? "bg-shakti-100 dark:bg-shakti-800/40 text-shakti-700 dark:text-shakti-300"
                          : "hover:bg-shakti-50 dark:hover:bg-shakti-900/20 text-foreground"
                      )}
                    >
                      <div className="font-medium">{guru.name}</div>
                      <div className="text-sm text-muted-foreground">{guru.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={selectedGuru.image}
                    alt={selectedGuru.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:hidden">
                    <h2 className="text-white font-serif text-2xl font-medium">{selectedGuru.name}</h2>
                    <p className="text-white/80 text-sm">{selectedGuru.period}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="hidden md:block mb-4">
                    <h2 className="font-serif text-2xl font-medium">{selectedGuru.name}</h2>
                    <p className="text-muted-foreground">{selectedGuru.period}</p>
                  </div>
                  <p className="mb-6">{selectedGuru.description}</p>
                  <div>
                    <h3 className="font-medium mb-3">Key Contributions:</h3>
                    <ul className="space-y-2">
                      {selectedGuru.contributions.map((contribution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 w-2 h-2 rounded-full bg-shakti-500 flex-shrink-0"></span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-shakti-100/30 dark:bg-shakti-900/20 rounded-xl p-8 text-center">
          <h2 className="font-serif text-2xl font-medium mb-4">The Living Tradition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The lineage of Shaktham continues to this day, with contemporary teachers bringing ancient wisdom to modern practitioners. Through their guidance, the divine feminine energy remains accessible as a transformative force in our lives.
          </p>
          <a 
            href="/blogs" 
            className="inline-block mt-6 rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 transition-all duration-300 hover:shadow-lg hover:shadow-shakti-500/20"
          >
            Discover Modern Teachers
          </a>
        </div>
      </div>
    </div>
  );
};

export default GuruLineage;
