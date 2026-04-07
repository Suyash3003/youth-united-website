import React from 'react';
import events from '../../../data/events';
import { usePage } from '../../../context/PageContext';
import './EventsPreviewSection.css';

export default function EventsPreviewSection() {
  const { navigateTo } = usePage();
  const comingEvent = events.find(e => e.title === 'La Fiesta') || events[0];

  return (
    <div className="events-section">
      <div className="events-inner">
        <div className="events-header">
          <div>
            <div className="section-label reveal">What We Do</div>
            <h2 className="section-title reveal delay-1">Coming <em>Events</em></h2>
          </div>
        </div>
        <div className="event-banner reveal delay-3" onClick={() => navigateTo('events')}>
          <div className="event-banner-image-container">
            {comingEvent.image ? (
              <img src={comingEvent.image} alt="La-Fiesta 2.0" className="event-banner-photo" />
            ) : (
              <div className="event-banner-img-ph">
                <i className={comingEvent.icon || "fa-solid fa-universal-access"}></i>
                <span>{comingEvent.category}</span>
              </div>
            )}
            <div className="event-banner-date-badge">{comingEvent.date}</div>
          </div>
          <div className="event-banner-body">
            <div className="event-category">{comingEvent.category}</div>
            <h3>La-Fiesta 2.0</h3>
            <p>{comingEvent.description}</p>
            <div className="event-meta">
              <span><i className="fa-solid fa-location-dot"></i> {comingEvent.location}</span>
              <span><i className="fa-solid fa-users"></i> {comingEvent.attendeesNote}</span>
            </div>
            <button className="btn btn-primary mt-4" style={{ marginTop: '20px' }}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
