
import { ExternalLink } from 'lucide-react';
import ActivityCard from './ActivityCard';

// Sample activities data
const activities = [
  {
    id: 1,
    title: 'Mother Divine Retreat',
    date: 'June 15-20, 2023',
    location: 'Himalayan Ashram, India',
    description: 'A 5-day immersive retreat focusing on Shakti meditation techniques and divine feminine awakening practices.',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Urban Shakti Workshop Series',
    date: 'Monthly, First Sunday',
    location: 'Various City Locations',
    description: 'A recurring workshop bringing Shakti practices to urban centers, making ancient wisdom accessible to modern practitioners.',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Divine Feminine Conference',
    date: 'September 21-23, 2023',
    location: 'Global Virtual Event',
    description: 'An online gathering of teachers, practitioners, and seekers exploring the resurgence of divine feminine consciousness.',
    image: '/placeholder.svg'
  },
  /* Additional activities can be added here */
];

const ActivitiesList = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-center">Upcoming Activities</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Join our community events to deepen your practice and connect with fellow seekers.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#" className="text-shakti-500 font-medium hover:underline inline-flex items-center">
          View All Activities <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ActivitiesList;
