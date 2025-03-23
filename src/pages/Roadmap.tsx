
import { useState } from 'react';
import { Calendar, Award, Book, Users, MessageCircle, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample roadmap data
const roadmapCategories = [
  {
    id: 'education',
    name: 'Educational Initiatives',
    icon: Book,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'community',
    name: 'Community Growth',
    icon: Users,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'events',
    name: 'Special Events',
    icon: Calendar,
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'digital',
    name: 'Digital Presence',
    icon: Globe,
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'outreach',
    name: 'Global Outreach',
    icon: MessageCircle,
    color: 'from-violet-500 to-indigo-500'
  }
];

// Roadmap items by category
const roadmapItems = {
  education: [
    {
      title: 'Advanced Shakti Meditation Series',
      timeframe: 'Q3 2024',
      description: 'Launch a comprehensive 12-week program for experienced practitioners to deepen their connection with cosmic energy.',
      status: 'planning'
    },
    {
      title: 'Shakti Wisdom Publishing Initiative',
      timeframe: 'Q4 2024',
      description: 'Begin production of a series of accessible books and digital resources to bring Shaktham principles to a wider audience.',
      status: 'planning'
    },
    {
      title: 'Children\'s Energy Education Program',
      timeframe: 'Q1 2025',
      description: 'Develop age-appropriate materials and activities to introduce young people to the concepts of divine energy and balance.',
      status: 'concept'
    }
  ],
  community: [
    {
      title: 'Regional Shakti Circles',
      timeframe: 'Q3 2024 - Q1 2025',
      description: 'Establish local practice groups in 12 new regions to provide regular community connection and support for practitioners.',
      status: 'planning'
    },
    {
      title: 'Shakti Mentorship Program',
      timeframe: 'Q1 2025',
      description: 'Create a structured mentoring system pairing experienced practitioners with newcomers for personalized guidance.',
      status: 'concept'
    },
    {
      title: 'Community Living Exploration',
      timeframe: 'Q3 2025',
      description: 'Research and develop plans for an intentional living community based on Shakti principles of harmonious energy exchange.',
      status: 'vision'
    }
  ],
  events: [
    {
      title: 'Energy Healing Symposium',
      timeframe: 'November 2024',
      description: 'Host a three-day gathering bringing together various energy healing traditions to explore their connections with Shakti principles.',
      status: 'planning'
    },
    {
      title: 'Nine Nights of the Goddess Festival',
      timeframe: 'October 2024',
      description: 'Expand our annual celebration to include international participants through both in-person and virtual offerings.',
      status: 'planning'
    },
    {
      title: 'Shakti in Daily Life Conference',
      timeframe: 'Spring 2025',
      description: 'A conference focused on practical applications of Shakti principles in relationships, work, creativity, and wellness.',
      status: 'concept'
    }
  ],
  digital: [
    {
      title: 'Shakti Meditation App',
      timeframe: 'Q4 2024',
      description: 'Launch a mobile application providing guided meditations, energy tracking, and community connection features.',
      status: 'development'
    },
    {
      title: 'Virtual Reality Sacred Space',
      timeframe: 'Q2 2025',
      description: 'Create an immersive VR environment for meditation and energy practices, especially for those without physical access to temples.',
      status: 'research'
    },
    {
      title: 'Digital Library Expansion',
      timeframe: 'Ongoing through 2025',
      description: 'Digitize and translate rare texts on Shakti traditions to make them freely available to practitioners worldwide.',
      status: 'planning'
    }
  ],
  outreach: [
    {
      title: 'Interfaith Energy Dialogue Series',
      timeframe: 'Q4 2024',
      description: 'Initiate conversations with other spiritual traditions about their understanding and approaches to divine energy.',
      status: 'planning'
    },
    {
      title: 'University Research Partnerships',
      timeframe: '2025',
      description: 'Establish collaborations with academic institutions to study the effects of Shakti meditation practices on wellbeing.',
      status: 'concept'
    },
    {
      title: 'Global Energy Healing Network',
      timeframe: '2025-2026',
      description: 'Create an international alliance of practitioners offering energy healing services to communities in need.',
      status: 'vision'
    }
  ]
};

const statusColors = {
  development: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300',
  planning: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
  concept: 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
  research: 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300',
  vision: 'bg-rose-100 text-rose-700 dark:bg-rose-900/20 dark:text-rose-300'
};

const Roadmap = () => {
  const [activeCategory, setActiveCategory] = useState('education');
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            FUTURE VISION
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Our Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our plans for expanding the reach and depth of Shakti wisdom in the coming years.
          </p>
        </div>
        
        {/* Vision Statement */}
        <div className="mb-16 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 h-64 md:h-auto relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.unsplash.com/photo-1543694976-2a47d72f06fe?q=80&w=1374&auto=format&fit=crop")',
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-shakti-500/20 to-transparent"></div>
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-shakti-500" />
                <h2 className="text-2xl font-serif font-medium">Vision for 2030</h2>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  By 2030, we envision Shaktham as a globally recognized spiritual tradition that offers accessible wisdom and practices for connecting with divine feminine energy in ways that transform individual lives and communities.
                </p>
                <p>
                  Our community will have established centers on five continents, each serving as a hub for education, healing, and celebration of Shakti principles. Our digital platforms will provide resources in multiple languages, making this ancient wisdom available regardless of geographic location.
                </p>
                <p>
                  Through partnerships with scientific, educational, and humanitarian organizations, we aim to demonstrate the practical benefits of Shakti awareness for addressing contemporary challenges—from personal wellbeing to social harmony and environmental stewardship.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Category Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {roadmapCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'py-3 px-5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'bg-white dark:bg-shakti-900/40 shadow-sm hover:shadow'
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Roadmap Items */}
        <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems[activeCategory as keyof typeof roadmapItems].map((item, index) => (
              <div 
                key={index} 
                className="bg-shakti-50 dark:bg-shakti-900/20 rounded-xl p-6 shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <span className={cn('inline-block py-1 px-2 rounded-full text-xs font-medium', statusColors[item.status as keyof typeof statusColors])}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <Calendar className="inline-block w-4 h-4 mr-1" />
                  {item.timeframe}
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community Input Section */}
        <div className="mt-16 p-8 bg-shakti-100/30 dark:bg-shakti-900/20 rounded-xl text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Share Your Vision</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our roadmap is a living document shaped by community input. We invite you to share your ideas for how Shaktham can evolve to better serve humanity's connection with divine energy.
          </p>
          <a 
            href="/message-board" 
            className="rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 transition-all duration-300"
          >
            Contribute Your Ideas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
