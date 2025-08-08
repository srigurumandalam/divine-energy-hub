import React from 'react';

export default function AnnouncementBar() {
  return (
    <div role="region" aria-label="Site announcements" className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
        <p className="truncate pr-4">
          Notice: Welcome to Shaktham. Timings and upcoming programs are updated weekly.
        </p>
        <a href="/calendar" className="inline-flex items-center gap-1 font-medium underline underline-offset-4 hover:opacity-90">
          View All Events
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>
    </div>
  );
}
