
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import AnimatedBackground from '../ui/AnimatedBackground';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const [scroll, setScroll] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax effects
  const titleTransform = `translateY(${scroll * 0.2}px)`;
  const subtitleTransform = `translateY(${scroll * 0.1}px)`;
  const bgOpacity = 1 - Math.min(1, scroll / 700);
  
  return (
    <AnimatedBackground className="min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-shakti-300/10 to-shakti-500/10 pointer-events-none"
        style={{ opacity: bgOpacity }}
      ></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-shakti-300/30 animate-rotate-slow opacity-20 pointer-events-none"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(155, 135, 245, 0) 70%)',
            transform: `scale(${1 + scroll * 0.001})` 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            DIVINE FEMININE ENERGY
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-serif font-bold tracking-tight energy-text animate-fade-in opacity-0"
            style={{ 
              transform: titleTransform, 
              animationDelay: '0.4s', 
              animationFillMode: 'forwards',
              textShadow: '0 0 40px rgba(155, 135, 245, 0.2)'
            }}
          >
            Embrace the Flow of Cosmic Energy
          </h1>
          
          <p 
            className="mt-6 text-xl md:text-2xl text-muted-foreground animate-fade-in opacity-0"
            style={{ 
              transform: subtitleTransform, 
              animationDelay: '0.6s', 
              animationFillMode: 'forwards' 
            }}
          >
            Discover the ancient wisdom of Shaktham, where divine feminine energy manifests as the universal creative force.
          </p>
          
          <div className="mt-10 flex justify-center gap-x-6 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a
              href="#introduction"
              className="rounded-full bg-shakti-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-shakti-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shakti-500 transition-all duration-300 hover:shadow-lg hover:shadow-shakti-500/20"
            >
              Explore Shaktham
            </a>
            <a
              href="#events"
              className="rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-medium text-shakti-600 shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 border border-shakti-200"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
        <a href="#introduction" className="inline-flex flex-col items-center text-shakti-500">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </AnimatedBackground>
  );
}
