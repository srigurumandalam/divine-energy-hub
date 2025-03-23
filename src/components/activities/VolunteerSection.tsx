
import VolunteerCard from './VolunteerCard';

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

const VolunteerSection = () => {
  return (
    <div className="bg-shakti-100/30 dark:bg-shakti-900/20 rounded-xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">Get Involved</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Share your gifts and energy with our community through these volunteer opportunities. No prior experience with Shaktham is necessary for many roles—just an open heart and willingness to serve.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {volunteerOpportunities.map((opportunity, index) => (
          <VolunteerCard 
            key={index} 
            opportunity={opportunity} 
          />
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
  );
};

export default VolunteerSection;
