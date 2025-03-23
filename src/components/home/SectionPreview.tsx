
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  index: number;
  icon: React.ReactNode;
}

function SectionCard({ title, description, linkText, linkUrl, index, icon }: SectionCardProps) {
  const delay = `delay-${index * 100}`;
  
  return (
    <div 
      className={cn(
        "animate-on-scroll opacity-0 col-span-1 glass-card rounded-xl overflow-hidden transition-all duration-300 group hover:shadow-xl",
        index % 2 === 0 ? "hover:shadow-shakti-400/10" : "hover:shadow-shakti-600/10",
        delay
      )}
    >
      <div className="relative p-6 md:p-8 flex flex-col h-full">
        <div 
          className={cn(
            "absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none",
            index % 2 === 0 ? "bg-shakti-400" : "bg-shakti-600"
          )}
        ></div>
        
        <div 
          className={cn(
            "rounded-full p-3 mb-4 w-fit",
            index % 2 === 0 ? "bg-shakti-100 text-shakti-500" : "bg-shakti-200 text-shakti-700"
          )}
        >
          {icon}
        </div>
        
        <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
        <p className="text-muted-foreground flex-grow">{description}</p>
        
        <Link 
          to={linkUrl} 
          className={cn(
            "inline-flex items-center mt-6 font-medium hover:underline transition-all duration-300 ",
            index % 2 === 0 ? "text-shakti-500 hover:text-shakti-600" : "text-shakti-700 hover:text-shakti-800"
          )}
        >
          {linkText}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

interface SectionPreviewProps {
  sections: {
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    icon: React.ReactNode;
  }[];
  title: string;
  subtitle: string;
}

export default function SectionPreview({ sections, title, subtitle }: SectionPreviewProps) {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-shakti-100/30 to-background dark:from-shakti-900/20 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-serif font-bold energy-text mb-4">{title}</h2>
          <p className="animate-on-scroll opacity-0 delay-100 text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <SectionCard 
              key={index}
              title={section.title}
              description={section.description}
              linkText={section.linkText}
              linkUrl={section.linkUrl}
              index={index}
              icon={section.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
