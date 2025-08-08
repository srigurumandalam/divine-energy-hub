import React from 'react';
import { Calendar, HandCoins, MapPinned } from 'lucide-react';

const items = [
  {
    title: 'Plan Your Visit',
    description: 'Timings, directions and essentials for pilgrims.',
    href: '/introduction',
    icon: MapPinned,
    cta: 'Learn More',
  },
  {
    title: 'Online Services',
    description: 'Participate in community discussions and requests online.',
    href: '/message-board',
    icon: HandCoins,
    cta: 'Explore',
  },
  {
    title: 'Events & Programs',
    description: 'View upcoming ceremonies, workshops and gatherings.',
    href: '/calendar',
    icon: Calendar,
    cta: 'View All Events',
  },
];

export default function HighlightsStrip() {
  return (
    <section className="relative py-8 bg-primary/10 dark:bg-primary/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="group rounded-xl bg-card text-card-foreground border border-border p-5 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="shrink-0 rounded-full p-3 bg-primary/15 text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                <span className="inline-block mt-3 text-sm font-medium text-primary group-hover:underline underline-offset-4">{item.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
