import React from 'react';
import EventCard from '../EventCard/EventCard';
import events from '../../../data/events';
import { usePage } from '../../../context/PageContext';
import './EventsPreviewSection.css';

export default function EventsPreviewSection() {
  const { navigateTo } = usePage();
  const featured = events.slice(0, 3);

  return (
    <div className="events-section">
      <div className="events-inner">
        <div className="events-header">
          <div>
            <div className="section-label reveal">What We Do</div>
            <h2 className="section-title reveal delay-1">Recent <em>Events</em></h2>
          </div>
          <a href="/events" className="btn btn-outline reveal delay-2"
            onClick={(e) => { e.preventDefault(); navigateTo('events'); }}>
            View All Events <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="events-grid">
          {featured.map((ev, i) => (
            <div key={ev.id} className={`reveal delay-${i+1}`}><EventCard event={ev} /></div>
          ))}
        </div>
      </div>
    </div>
  );
}
