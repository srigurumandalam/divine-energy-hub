import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnnouncementBar from './AnnouncementBar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const nav = [
  { label: 'Home', to: '/' },
  {
    label: 'Events',
    items: [
      { label: 'Calendar', to: '/calendar' },
      { label: 'Activities', to: '/activities' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blogs', to: '/blogs' },
      { label: 'Videos', to: '/videos' },
      { label: 'Image Gallery', to: '/gallery' },
      { label: 'Publications', to: '/publications' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Introduction', to: '/introduction' },
      { label: 'Guru Lineage', to: '/guru-lineage' },
      { label: 'Roadmap', to: '/roadmap' },
    ],
  },
  {
    label: 'Online Services',
    items: [
      { label: 'Message Board', to: '/message-board' },
    ],
  },
  { label: 'Contact', items: [ { label: 'Get in touch', to: '/message-board' } ] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location]);

  return (
    <header className="fixed top-0 w-full z-50 shadow-md">
      <AnnouncementBar />
      <div className={cn(
        'w-full transition-colors duration-300',
        'bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80 text-primary-foreground'
      )}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-3" aria-label="Global">
          <div className="flex lg:flex-1 items-center">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-serif text-2xl font-medium">Shaktham</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {nav.map((item) => (
              item.items ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="nav-link text-sm font-medium inline-flex items-center gap-1 focus:outline-none">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-[60] bg-popover text-popover-foreground">
                    {item.items.map((sub) => (
                      <DropdownMenuItem asChild key={sub.label}>
                        <Link to={sub.to} className="text-sm">
                          {sub.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={cn(
                    'nav-link text-sm font-medium',
                    location.pathname === item.to ? 'underline underline-offset-8' : 'hover:opacity-90'
                  )}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 transition-transform duration-300 ease-in-out lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <span className="font-serif text-2xl font-medium">Shaktham</span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 space-y-6">
          {nav.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{item.label}</p>
              {item.items ? (
                <div className="space-y-2">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block py-2 text-base font-medium border-b border-border',
                        location.pathname === sub.to ? 'text-primary' : 'hover:pl-2'
                      )}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={item.to!}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block py-2 text-base font-medium border-b border-border',
                    location.pathname === item.to ? 'text-primary' : 'hover:pl-2'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
