import React from 'react';
import events from '../../../data/events';
import { usePage } from '../../../context/PageContext';
import { HOME_BACKGROUND_IMAGE } from '../../../constants/media';
import './EventsPreviewSection.css';

export default function EventsPreviewSection() {
  const { navigateTo } = usePage();
  const comingEvent = events.find(e => e.title === 'La Fiesta') || events[0];
  const bannerImage = comingEvent.image || HOME_BACKGROUND_IMAGE;
  const isVideoBanner = /\.(mp4|webm|ogg)$/i.test(bannerImage || '');

  return (
    <div className="events-section">
      <div className="events-inner">
        <div className="events-header">
          <div>
            <div className="section-label reveal">Our Mission</div>
            <h2 className="section-title reveal delay-1">Upcoming Celebrations</h2>
          </div>
        </div>
        <div className="event-banner reveal delay-3" onClick={() => navigateTo('events')}>
          <div className="event-banner-image-container">
            {bannerImage ? (
              isVideoBanner ? (
                <video
                  className="event-banner-video"
                  src={bannerImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img src={bannerImage} alt="La-Fiesta 2.0" className="event-banner-photo" />
              )
            ) : (
              <div className="event-banner-img-ph">
                <i className={comingEvent.icon || "fa-solid fa-universal-access"}></i>
                <span>{comingEvent.category}</span>
              </div>
            )}
          </div>
          <div className="event-banner-overlay"></div>
          <div className="event-banner-date-badge">{comingEvent.date}</div>
          <div className="event-banner-layout">
            <div className="event-banner-body">
              <div className="event-text-box">
                <div className="event-category">INCLUSION</div>
                <h3>LA FIESTA 2.0</h3>
                <p>
                  A joyful celebration for differently-abled children from schools and NGOs across Patiala.
                  Together, we celebrate ability through drawing, clay modelling, singing, and dance.
                </p>
              </div>
              <button className="event-banner-cta">Learn More</button>
            </div>
            <div className="event-sidebar-anchor" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
