
import { useEffect, useRef } from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="introduction" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-shakti-100/30 dark:from-background dark:to-shakti-900/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="animate-on-scroll opacity-0 delay-100">
              <h2 className="text-3xl md:text-4xl font-serif font-bold energy-text mb-2">Understanding Shaktham</h2>
              <div className="w-20 h-1 bg-shakti-400"></div>
            </div>
            
            <p className="animate-on-scroll opacity-0 delay-200 text-lg text-muted-foreground">
              Shaktham is a profound spiritual tradition within Hinduism that centers on the worship of the divine feminine energy, known as Shakti. The word "Shakti" literally translates to "energy" or "power" in Sanskrit, representing the primordial cosmic energy that flows through all existence.
            </p>
            
            <p className="animate-on-scroll opacity-0 delay-300 text-lg text-muted-foreground">
              In Shaktham, the divine feminine is recognized as the active principle of reality—the dynamic force that animates the universe and makes all creation, preservation, and dissolution possible. This energy is often personified as the goddess in her various forms, but transcends mere personification to represent the very essence of consciousness and being.
            </p>
            
            <a 
              href="/introduction" 
              className="animate-on-scroll opacity-0 delay-400 inline-block mt-6 text-shakti-500 hover:text-shakti-600 font-medium"
            >
              Learn more about our philosophy →
            </a>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
            <div className="animate-on-scroll opacity-0 delay-200 col-span-2 glass-card rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="rounded-full p-3 bg-shakti-100 text-shakti-500">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Divine Energy</h3>
                <p className="text-muted-foreground">The cosmic power that flows through all existence</p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 delay-300 glass-card rounded-lg p-6 flex flex-col space-y-3 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="rounded-full p-3 bg-shakti-100 w-fit text-shakti-500">
                <Sun size={24} />
              </div>
              <h3 className="font-medium text-lg">Creative Force</h3>
              <p className="text-muted-foreground">The active principle behind all creation</p>
            </div>
            
            <div className="animate-on-scroll opacity-0 delay-400 glass-card rounded-lg p-6 flex flex-col space-y-3 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="rounded-full p-3 bg-shakti-100 w-fit text-shakti-500">
                <Moon size={24} />
              </div>
              <h3 className="font-medium text-lg">Inner Awakening</h3>
              <p className="text-muted-foreground">The journey to realize the divine within</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
