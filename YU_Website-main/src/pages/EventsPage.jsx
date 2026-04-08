import React, { useEffect, useState } from 'react';
import events from '../data/events';
import EventCard from '../components/sections/EventCard/EventCard';
import { triggerReveal } from '../utils/reveal';
import '../components/sections/EventCard/EventCard.css';
import '../components/sections/About/About.css';

const CATEGORIES = [
  'All',
  'Inclusion',
  'Outreach',
  'Community',
  'Environment',
  'Social Impact',
  'Unity',
  'Youth',
  'Children',
];

const MONTH_INDEX = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function getEventStartDate(dateLabel) {
  const match = String(dateLabel || '').match(/([A-Za-z]{3,9})\s+(\d{1,2}),\s*(\d{4})/);
  if (!match) return new Date(8640000000000000);

  const [, monthToken, dayToken, yearToken] = match;
  const month = MONTH_INDEX[monthToken.slice(0, 3).toLowerCase()];
  if (month == null) return new Date(8640000000000000);

  return new Date(Number(yearToken), month, Number(dayToken));
}

export default function EventsPage() {
  const [active, setActive] = useState('All');

  useEffect(() => { setTimeout(triggerReveal, 100); }, [active]);

  const filtered = [...(active === 'All'
    ? events
    : events.filter((event) => event.category === active))]
    .sort((a, b) => getEventStartDate(a.date) - getEventStartDate(b.date));

  return (
    <main>
      {/* Page hero */}
      <div className="about-hero" style={{ minHeight: '320px' }}>
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <span className="page-label">Our Events</span>
          <h1>Where <em style={{ fontStyle:'italic', color:'var(--green-soft)' }}>Action</em> Happens</h1>
          <p>Browse every initiative, drive, and programme we have organised — from campus to community.</p>
        </div>
      </div>

      <section>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filter tabs */}
          <div className="events-filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={`events-grid ${active === 'All' ? 'events-grid--all-layout' : ''}`} style={{ marginTop: '40px' }}>
            {filtered.map((ev, i) => (
              <EventCard
                key={ev.id}
                event={ev}
                delay={i % 3 + 1}
                className={active === 'All' ? `event-card--ev-${ev.id}` : ''}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ color: 'var(--grey-400)', textAlign: 'center', padding: '48px 0' }}>
              No events in this category yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
