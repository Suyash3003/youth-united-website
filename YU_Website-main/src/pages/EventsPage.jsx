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

export default function EventsPage() {
  const [active, setActive] = useState('All');

  useEffect(() => { setTimeout(triggerReveal, 100); }, [active]);

  const filtered = active === 'All' ? events : events.filter(e => e.category === active);

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
          <div className="events-grid" style={{ marginTop: '40px' }}>
            {filtered.map((ev, i) => (
              <EventCard key={ev.id} event={ev} delay={i % 3 + 1} />
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
