
import PartnerCard from './PartnerCard';

const partnerOrganizations = [
  'Global Meditation Network',
  'Sacred Feminine Alliance',
  'Energy Medicine Institute',
  'Conscious Living Foundation',
  'Divine Nature Project',
  'Spiritual Arts Academy'
];

const PartnersSection = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-center">Our Partners</h2>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        We collaborate with these aligned organizations to extend the reach and impact of divine feminine energy principles.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {partnerOrganizations.map((partner, index) => (
          <PartnerCard key={index} name={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
