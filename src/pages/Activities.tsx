
import { ArrowRight, ExternalLink } from 'lucide-react';

// Sample activities data
const activities = [
  {
    id: 1,
    title: 'Community Outreach Programs',
    description: 'Regular service initiatives that extend Shakti principles of compassion and nurturing energy to those in need.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1470&auto=format&fit=crop',
    items: [
      'Monthly food distribution to local shelters',
      'Free healing energy sessions for the elderly',
      'Educational workshops in underserved communities',
      'Environmental cleanup and nature connection activities'
    ]
  },
  {
    id: 2,
    title: 'Special Ceremonies & Celebrations',
    description: 'Honoring significant cosmic cycles and traditional festivals that align with divine feminine energy.',
    image: 'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?q=80&w=1470&auto=format&fit=crop',
    items: [
      'Nine Nights of the Goddess (Navratri) celebration',
      'Full moon and new moon ceremonies',
      'Spring equinox energy renewal ritual',
      'Divine Mother festival with cultural performances'
    ]
  },
  {
    id: 3,
    title: 'Educational Programs',
    description: 'Structured learning opportunities for deepening understanding of Shakti principles and practices.',
    image: 'https://images.unsplash.com/photo-1603387388156-6f142c5752b4?q=80&w=1470&auto=format&fit=crop',
    items: [
      'Six-week introduction to Shakti meditation course',
      'Weekend workshops on various aspects of feminine energy',
      'Guest lectures by renowned spiritual teachers',
      'Children's program on cosmic energy awareness'
    ]
  }
];

// Sample volunteer opportunities
const volunteerOpportunities = [
  {
    title: 'Event Support Team',
    commitment: 'Flexible, event-based',
    description: 'Help organize and facilitate community gatherings, workshops, and ceremonies.',
    skills: ['Organization', 'Communication', 'Hospitality']
  },
  {
    title: 'Digital Content Creator',
    commitment: '5-10 hours monthly',
    description: 'Assist with creating and sharing educational content about Shaktham through our online platforms.',
    skills: ['Writing', 'Photography', 'Social Media']
  },
  {
    title: 'Community Outreach Coordinator',
    commitment: '8-12 hours monthly',
    description: 'Help plan and implement service projects that share Shakti principles with the broader community.',
    skills: ['Leadership', 'Planning', 'Compassion']
  },
  {
    title: 'Sacred Space Caretaker',
    commitment: '4-6 hours monthly',
    description: 'Maintain the beauty and energy of our temple and meditation spaces.',
    skills: ['Attention to Detail', 'Reverence', 'Reliability']
  }
];

const Activities = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            COMMUNITY ENGAGEMENT
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Ongoing Activities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the various ways our community embodies and shares Shakti principles through regular activities.
          </p>
        </div>
        
        {/* Activities Section */}
        <div className="space-y-16 mb-16">
          {activities.map((activity, index) => (
            <div key={activity.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">{activity.title}</h2>
                <p className="text-muted-foreground mb-6">{activity.description}</p>
                <ul className="space-y-3">
                  {activity.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-1 w-2 h-2 rounded-full bg-shakti-500 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`/activities/${activity.id}`} 
                  className="inline-flex items-center mt-6 text-shakti-500 hover:text-shakti-600 font-medium"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Volunteer Section */}
        <div className="bg-shakti-100/30 dark:bg-shakti-900/20 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">Get Involved</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share your gifts and energy with our community through these volunteer opportunities. No prior experience with Shaktham is necessary for many roles—just an open heart and willingness to serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{opportunity.title}</h3>
                  <span className="text-xs py-1 px-2 bg-shakti-50 dark:bg-shakti-900/20 rounded-full">
                    {opportunity.commitment}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                <div className="flex flex-wrap gap-2">
                  {opportunity.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs py-1 px-2 bg-shakti-100 dark:bg-shakti-800/40 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/message-board" 
              className="inline-block rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 transition-all duration-300"
            >
              Apply to Volunteer
            </a>
          </div>
        </div>
        
        {/* Partner Organizations */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-center">Our Partners</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We collaborate with these aligned organizations to extend the reach and impact of divine feminine energy principles.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <a 
              href="#" 
              className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
              <h3 className="font-medium text-center">Global Meditation Network</h3>
              <span className="text-sm text-shakti-500 flex items-center mt-2">
                Visit <ExternalLink className="ml-1 w-3 h-3" />
              </span>
            </a>
            <a 
              href="#" 
              className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
              <h3 className="font-medium text-center">Sacred Feminine Alliance</h3>
              <span className="text-sm text-shakti-500 flex items-center mt-2">
                Visit <ExternalLink className="ml-1 w-3 h-3" />
              </span>
            </a>
            <a 
              href="#" 
              className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
              <h3 className="font-medium text-center">Energy Medicine Institute</h3>
              <span className="text-sm text-shakti-500 flex items-center mt-2">
                Visit <ExternalLink className="ml-1 w-3 h-3" />
              </span>
            </a>
            <a 
              href="#" 
              className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
              <h3 className="font-medium text-center">Conscious Living Foundation</h3>
              <span className="text-sm text-shakti-500 flex items-center mt-2">
                Visit <ExternalLink className="ml-1 w-3 h-3" />
              </span>
            </a>
            <a 
              href="#" 
              className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
              <h3 className="font-medium text-center">Divine Nature Project</h3>
              <span className="text-sm text-shakti-500 flex items-center mt-2">
                Visit <ExternalLink className="ml-1 w-3 h-3" />
              </span>
            </a>
            <a 
              href="#" 
              className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
              <h3 className="font-medium text-center">Spiritual Arts Academy</h3>
              <span className="text-sm text-shakti-500 flex items-center mt-2">
                Visit <ExternalLink className="ml-1 w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
