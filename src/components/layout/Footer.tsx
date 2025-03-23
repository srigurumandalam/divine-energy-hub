
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-shakti-900 border-t border-shakti-100 dark:border-shakti-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shakti-300 to-shakti-600 animate-pulse-slow flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-serif text-2xl font-medium energy-text">Shaktham</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Exploring and celebrating the divine feminine energy through ancient wisdom and modern practice.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-shakti-400 hover:text-shakti-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-shakti-400 hover:text-shakti-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-shakti-400 hover:text-shakti-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-shakti-400 hover:text-shakti-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h3 className="text-base font-medium text-foreground">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/introduction" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link to="/guru-lineage" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Guru Lineage
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/calendar" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Calendar
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-foreground">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/videos" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link to="/publications" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link to="/message-board" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Message Board
                  </Link>
                </li>
                <li>
                  <Link to="/activities" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link to="/roadmap" className="text-sm text-muted-foreground hover:text-shakti-500">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-foreground">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-shakti-400 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    123 Spiritual Center, Divine Avenue, Cosmic City, 98765
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-shakti-400" />
                  <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-shakti-400" />
                  <span className="text-sm text-muted-foreground">connect@shaktham.org</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/message-board" 
                  className="inline-flex items-center text-sm font-medium text-shakti-500 hover:text-shakti-600"
                >
                  Send us a message
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-shakti-100 dark:border-shakti-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shaktham. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-shakti-500">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-shakti-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
