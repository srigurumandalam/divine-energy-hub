
import React from 'react';
import ActivityCard from './ActivityCard';

interface ActivityItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  items?: string[];
}

const activities: ActivityItem[] = [
  {
    id: 1,
    title: 'Weekly Shakti Meditation Circle',
    date: 'Every Tuesday, 7:00 PM',
    location: 'Community Center, Room 108',
    description: 'Join our weekly meditation circle focused on awakening and nurturing your inner Shakti energy.',
    image: 'meditation',
    items: ['Guided meditation', 'Energy work', 'Group discussion']
  },
  {
    id: 2,
    title: 'Monthly Full Moon Ceremony',
    date: 'Next: June 24, 8:30 PM',
    location: 'Lakeside Park',
    description: 'Experience the powerful connection between feminine energy and lunar cycles in our monthly ceremony.',
    image: 'moon',
    items: ['Ritual bathing', 'Chanting', 'Intention setting']
  },
  {
    id: 3,
    title: 'Shakti Dance Workshop',
    date: 'Last Saturday of each month, 10:00 AM',
    location: 'Divine Movement Studio',
    description: 'Express your divine feminine energy through movement in this guided dance workshop.',
    image: 'dance',
    items: ['Free-form movement', 'Guided visualization', 'Breath work']
  },
  {
    id: 4,
    title: 'Sacred Text Study Group',
    date: 'Every Thursday, 6:30 PM',
    location: 'Online (Zoom)',
    description: 'Delve into ancient Shakta texts and discuss their relevance to modern spiritual practice.',
    image: 'study',
    items: ['Textual analysis', 'Historical context', 'Contemporary application']
  }
];

const ActivitiesList: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesList;
