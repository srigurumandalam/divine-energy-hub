
import { ExternalLink } from 'lucide-react';

interface PartnerCardProps {
  name: string;
}

const PartnerCard = ({ name }: PartnerCardProps) => {
  return (
    <a 
      href="#" 
      className="flex flex-col items-center p-6 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="w-16 h-16 rounded-full bg-shakti-100 mb-4"></div>
      <h3 className="font-medium text-center">{name}</h3>
      <span className="text-sm text-shakti-500 flex items-center mt-2">
        Visit <ExternalLink className="ml-1 w-3 h-3" />
      </span>
    </a>
  );
};

export default PartnerCard;
