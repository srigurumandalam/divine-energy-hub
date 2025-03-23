
import ActivitiesList from '@/components/activities/ActivitiesList';
import VolunteerSection from '@/components/activities/VolunteerSection';
import PartnersSection from '@/components/activities/PartnersSection';

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
        <ActivitiesList />
        
        {/* Volunteer Section */}
        <VolunteerSection />
        
        {/* Partner Organizations */}
        <PartnersSection />
      </div>
    </div>
  );
};

export default Activities;
