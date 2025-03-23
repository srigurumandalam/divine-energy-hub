
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Introduction', href: '/introduction' },
  { name: 'Guru Lineage', href: '/guru-lineage' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Videos', href: '/videos' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Publications', href: '/publications' },
  { name: 'Message Board', href: '/message-board' },
  { name: 'Activities', href: '/activities' },
  { name: 'Roadmap', href: '/roadmap' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 dark:bg-shakti-900/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shakti-300 to-shakti-600 animate-pulse-slow flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-serif text-2xl font-medium energy-text">Shaktham</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-shakti-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'nav-link text-sm font-medium',
                location.pathname === item.href ? 'active text-shakti-600' : 'text-foreground/80 hover:text-shakti-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 dark:bg-shakti-900/95 backdrop-blur-md px-6 py-6 transition-transform duration-300 ease-in-out lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shakti-300 to-shakti-600 animate-pulse-slow flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-serif text-2xl font-medium energy-text">Shaktham</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-shakti-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'block py-3 text-base font-medium border-b border-shakti-100 dark:border-shakti-800 transition-all duration-200',
                  location.pathname === item.href 
                    ? 'text-shakti-600 border-shakti-500' 
                    : 'text-foreground/80 hover:text-shakti-500 hover:pl-2'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
