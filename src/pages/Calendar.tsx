
import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample events data
const events = [
  {
    id: 1,
    title: 'New Moon Shakti Meditation',
    date: '2024-06-05',
    time: '7:00 PM - 9:00 PM',
    location: 'Main Temple',
    description: 'A special guided meditation session focusing on receptive feminine energy during the new moon.',
    category: 'Meditation'
  },
  {
    id: 2,
    title: 'Introduction to Kundalini Energy',
    date: '2024-06-12',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Hall',
    description: 'Learn about the dormant spiritual energy at the base of the spine and practices to awaken it safely.',
    category: 'Workshop'
  },
  {
    id: 3,
    title: 'Monthly Chanting Circle',
    date: '2024-06-15',
    time: '6:30 PM - 8:00 PM',
    location: 'Garden Pavilion',
    description: 'Join our community in sacred mantra recitation to honor the divine feminine.',
    category: 'Community'
  },
  {
    id: 4,
    title: 'Full Moon Energy Ritual',
    date: '2024-06-21',
    time: '8:00 PM - 10:00 PM',
    location: 'Sacred Grove',
    description: 'A powerful ceremony celebrating the culmination of divine feminine energy during the full moon.',
    category: 'Ritual'
  },
  {
    id: 5,
    title: 'Sacred Dance Workshop',
    date: '2024-06-25',
    time: '5:00 PM - 7:00 PM',
    location: 'Movement Studio',
    description: 'Express divine energy through sacred movement patterns and dance forms.',
    category: 'Workshop'
  },
  {
    id: 6,
    title: 'Shakti Philosophy Discussion',
    date: '2024-06-30',
    time: '11:00 AM - 1:00 PM',
    location: 'Library',
    description: 'An intellectual exploration of Shakti concepts and their relevance in contemporary life.',
    category: 'Discussion'
  }
];

const CategoryTag = ({ category }: { category: string }) => {
  const getColor = () => {
    switch (category) {
      case 'Meditation':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
      case 'Workshop':
        return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
      case 'Community':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300';
      case 'Ritual':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300';
      case 'Discussion':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300';
      default:
        return 'bg-shakti-100 text-shakti-700 dark:bg-shakti-900/40 dark:text-shakti-300';
    }
  };

  return (
    <span className={cn('inline-block py-1 px-2 rounded-full text-xs font-medium', getColor())}>
      {category}
    </span>
  );
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  
  // Get month data
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startDay = getDay(monthStart); // 0 for Sunday, 1 for Monday, etc.
  
  // Get events for selected day
  const selectedDateStr = format(selectedDay, 'yyyy-MM-dd');
  const dayEvents = events.filter(event => event.date === selectedDateStr);
  
  // Navigation functions
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  
  // Check if day has events
  const hasEvents = (day: Date) => {
    const dayStr = format(day, 'yyyy-MM-dd');
    return events.some(event => event.date === dayStr);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            SPIRITUAL SCHEDULE
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Event Calendar</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our community through regularly scheduled events and special ceremonies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Side */}
          <div className="lg:col-span-2 bg-white dark:bg-shakti-900/40 rounded-xl shadow-md overflow-hidden">
            {/* Month navigation */}
            <div className="flex items-center justify-between p-4 border-b border-shakti-100 dark:border-shakti-800">
              <button
                onClick={prevMonth}
                className="p-2 rounded-full hover:bg-shakti-100 dark:hover:bg-shakti-800/40 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-xl font-medium">
                {format(currentMonth, 'MMMM yyyy')}
              </h2>
              <button
                onClick={nextMonth}
                className="p-2 rounded-full hover:bg-shakti-100 dark:hover:bg-shakti-800/40 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-px bg-shakti-100 dark:bg-shakti-800">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium bg-white dark:bg-shakti-900/60">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-px bg-shakti-100 dark:bg-shakti-800">
              {/* Empty cells for days before the start of the month */}
              {Array.from({ length: startDay }).map((_, index) => (
                <div key={`empty-start-${index}`} className="p-3 bg-white/50 dark:bg-shakti-900/20"></div>
              ))}
              
              {/* Actual days of the month */}
              {monthDays.map((day) => {
                const dayStr = format(day, 'yyyy-MM-dd');
                const dayEvents = events.filter(event => event.date === dayStr);
                
                return (
                  <button
                    key={day.toString()}
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      'min-h-[80px] p-3 bg-white dark:bg-shakti-900/60 flex flex-col hover:bg-shakti-50 dark:hover:bg-shakti-800/20 relative transition-colors',
                      isSameDay(day, selectedDay) && 'ring-2 ring-shakti-500 ring-inset',
                      !isSameMonth(day, currentMonth) && 'text-muted-foreground'
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex items-center justify-center w-7 h-7 rounded-full text-sm mb-1',
                        hasEvents(day) && !isSameDay(day, selectedDay) && 'bg-shakti-100 dark:bg-shakti-800/40',
                        isSameDay(day, selectedDay) && 'bg-shakti-500 text-white'
                      )}
                    >
                      {format(day, 'd')}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {dayEvents.slice(0, 2).map((event, index) => (
                        <div 
                          key={index} 
                          className="w-full text-left overflow-hidden text-xs text-shakti-600 dark:text-shakti-300 whitespace-nowrap text-ellipsis"
                        >
                          • {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="w-full text-left text-xs text-muted-foreground">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
              
              {/* Empty cells for days after the end of the month */}
              {Array.from({ length: (7 - ((startDay + monthDays.length) % 7)) % 7 }).map((_, index) => (
                <div key={`empty-end-${index}`} className="p-3 bg-white/50 dark:bg-shakti-900/20"></div>
              ))}
            </div>
          </div>
          
          {/* Events for Selected Day */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <CalendarIcon className="w-6 h-6 text-shakti-500" />
                <h2 className="text-xl font-medium">
                  {format(selectedDay, 'MMMM d, yyyy')}
                </h2>
              </div>
              
              {dayEvents.length > 0 ? (
                <div className="space-y-6">
                  {dayEvents.map((event) => (
                    <div key={event.id} className="border-l-2 border-shakti-500 pl-4 -ml-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <CategoryTag category={event.category} />
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        <div>{event.time}</div>
                        <div>{event.location}</div>
                      </div>
                      <p className="text-sm">{event.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No events scheduled for this day.</p>
                  <a 
                    href="/message-board" 
                    className="inline-block mt-4 text-shakti-500 hover:text-shakti-600"
                  >
                    Suggest an event
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Upcoming Event Preview */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-medium mb-8 text-center">Highlighted Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event) => (
              <div 
                key={event.id} 
                className="bg-white dark:bg-shakti-900/40 rounded-xl shadow-md p-6 border-t-4 border-shakti-500 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <CategoryTag category={event.category} />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span>{format(parseISO(event.date), 'MMMM d, yyyy')} • {event.time}</span>
                  </div>
                  <p>{event.description}</p>
                  <div className="pt-2">
                    <a 
                      href={`/event/${event.id}`} 
                      className="text-shakti-500 hover:text-shakti-600 font-medium"
                    >
                      View details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
