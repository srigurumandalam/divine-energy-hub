import React from 'react';
import { BookOpen, Video, Image, Newspaper } from 'lucide-react';

export default function ResourcesNews() {
  const resources = [
    { title: 'Blogs & Articles', icon: BookOpen, href: '/blogs', desc: 'Insights on practice and philosophy.' },
    { title: 'Video Recordings', icon: Video, href: '/videos', desc: 'Discourses and guided sessions.' },
    { title: 'Image Gallery', icon: Image, href: '/gallery', desc: 'Events and sacred imagery.' },
  ];

  const news = [
    { title: 'Monthly Sadhana Schedule Published', date: 'Aug 2025', href: '/calendar' },
    { title: 'Community Meet-up Highlights', date: 'Jul 2025', href: '/activities' },
    { title: 'New Publication Released', date: 'Jun 2025', href: '/publications' },
  ];

  return (
    <section aria-labelledby="resources-news-heading" className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
        {/* Resources */}
        <article className="lg:col-span-2">
          <header className="mb-6">
            <h2 id="resources-news-heading" className="text-3xl font-serif font-bold">Resources & News</h2>
            <p className="text-muted-foreground">Explore resources and stay up to date.</p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((r) => (
              <a key={r.title} href={r.href} className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="p-5 flex gap-4 items-start">
                  <div className="rounded-md p-2.5 bg-primary/15 text-primary"><r.icon className="w-5 h-5" /></div>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </article>
        {/* News */}
        <aside>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Newspaper className="w-5 h-5 text-primary" /> News & Updates</h3>
            <ul className="mt-4 space-y-4">
              {news.map((n) => (
                <li key={n.title} className="border-b last:border-0 border-border pb-4">
                  <a href={n.href} className="block">
                    <p className="text-sm text-muted-foreground">{n.date}</p>
                    <p className="font-medium hover:underline underline-offset-4">{n.title}</p>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/blogs" className="mt-4 inline-block text-sm font-medium text-primary hover:underline underline-offset-4">View all</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
