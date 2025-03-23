
interface VolunteerOpportunity {
  title: string;
  commitment: string;
  description: string;
  skills: string[];
}

interface VolunteerCardProps {
  opportunity: VolunteerOpportunity;
}

const VolunteerCard = ({ opportunity }: VolunteerCardProps) => {
  return (
    <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
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
  );
};

export default VolunteerCard;
