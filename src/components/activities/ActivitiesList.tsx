
import ActivityCard from './ActivityCard';

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

const ActivitiesList = () => {
  return (
    <div className="space-y-16 mb-16">
      {activities.map((activity, index) => (
        <ActivityCard 
          key={activity.id} 
          activity={activity} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default ActivitiesList;
