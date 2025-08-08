
import { ArrowRight } from 'lucide-react';

export interface ActivityItem {
  id: number;
  title: string;
  description: string;
  image: string;
  items: string[];
}

interface ActivityCardProps {
  activity: ActivityItem;
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  return (
    <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
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
  );
};

export default ActivityCard;
