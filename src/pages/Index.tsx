
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import SectionPreview from '@/components/home/SectionPreview';
import { Book, Calendar, Image, MessageCircle, Navigation, Video } from 'lucide-react';

const Index = () => {
  // Define section previews
  const exploreSections = [
    {
      title: 'Guru Lineage',
      description: 'Discover the unbroken chain of spiritual masters who have preserved and transmitted the wisdom of Shaktham through generations.',
      linkText: 'Explore the lineage',
      linkUrl: '/guru-lineage',
      icon: <Navigation size={24} />
    },
    {
      title: 'Blogs & Articles',
      description: 'Dive into insightful articles and blogs about practices, philosophies, and modern applications of Shakti principles.',
      linkText: 'Read articles',
      linkUrl: '/blogs',
      icon: <Book size={24} />
    },
    {
      title: 'Image Gallery',
      description: 'Browse through our collection of sacred imagery, event photographs, and visual representations of divine energy.',
      linkText: 'View gallery',
      linkUrl: '/gallery',
      icon: <Image size={24} />
    },
  ];
  
  const resourceSections = [
    {
      title: 'Video Recordings',
      description: 'Watch lectures, ceremonies, and instructional videos from our spiritual leaders and practitioners.',
      linkText: 'Watch videos',
      linkUrl: '/videos',
      icon: <Video size={24} />
    },
    {
      title: 'Event Calendar',
      description: 'Stay updated with upcoming events, ceremonies, workshops, and spiritual gatherings in the Shaktham community.',
      linkText: 'Check the calendar',
      linkUrl: '/calendar',
      icon: <Calendar size={24} />
    },
    {
      title: 'Message Board',
      description: 'Connect with fellow practitioners, ask questions, and share your experiences in our community forums.',
      linkText: 'Join the conversation',
      linkUrl: '/message-board',
      icon: <MessageCircle size={24} />
    },
  ];

  return (
    <div>
      <HeroSection />
      <IntroSection />
      
      <div className="section-divider" />
      
      <SectionPreview 
        title="Explore Shaktham" 
        subtitle="Delve into the rich traditions and teachings of the divine feminine energy."
        sections={exploreSections}
      />
      
      <div className="section-divider" />
      
      <SectionPreview 
        title="Resources & Community" 
        subtitle="Connect with our resources and global community of practitioners."
        sections={resourceSections}
      />
      
      {/* Event highlight section */}
      <section id="events" className="py-24 bg-shakti-100/30 dark:bg-shakti-900/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold energy-text mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Join us for these transformative spiritual gatherings</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm dark:bg-shakti-900/60 shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/50 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4">
                  FEATURED EVENT
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Annual Shakti Meditation Retreat</h3>
                <p className="text-muted-foreground mb-6">
                  Experience a week-long immersion into the practices of Shakti meditation, guided by our most experienced teachers. Open to both beginners and advanced practitioners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-shakti-500 mr-2" />
                    <span>June 15-21, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <Navigation className="w-5 h-5 text-shakti-500 mr-2" />
                    <span>Serenity Retreat Center</span>
                  </div>
                </div>
                <a
                  href="/calendar"
                  className="rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shakti-500 transition-all duration-300 hover:shadow-lg hover:shadow-shakti-500/20 w-fit"
                >
                  Register Now
                </a>
              </div>
              <div className="relative h-64 md:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1594066521341-330a79387ec3?q=80&w=1974&auto=format&fit=crop")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-shakti-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/calendar"
              className="inline-flex items-center text-shakti-500 hover:text-shakti-600 font-medium"
            >
              View all upcoming events
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
