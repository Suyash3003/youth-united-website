import React from 'react';
import { usePage } from '../../../context/PageContext';
import './EventsPreviewSection.css';

const PREVIEW_EVENT = {
  date: 'Apr 18, 2025',
  category: 'INCLUSION',
  title: 'LA FIESTA 4.0',
  description:
    'A joyful celebration for differently-abled children from schools and NGOs across Patiala. Together, we celebrate ability through drawing, clay modelling, singing, and dance.',
};

const PREVIEW_BANNER_MEDIA = '/images/events/la-fiesta.mp4';

export default function EventsPreviewSection() {
  const { navigateTo } = usePage();
  const isVideoBanner = /\.(mp4|webm|ogg)$/i.test(PREVIEW_BANNER_MEDIA);

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
            {PREVIEW_BANNER_MEDIA ? (
              isVideoBanner ? (
                <video
                  className="event-banner-video"
                  src={PREVIEW_BANNER_MEDIA}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
              <img src={PREVIEW_BANNER_MEDIA} alt="La Fiesta preview" className="event-banner-photo" />
              )
            ) : (
              <div className="event-banner-img-ph">
                <i className="fa-solid fa-universal-access"></i>
                <span>{PREVIEW_EVENT.category}</span>
              </div>
            )}
          </div>
          <div className="event-banner-overlay"></div>
          <div className="event-banner-date-badge">{PREVIEW_EVENT.date}</div>
          <div className="event-banner-layout">
            <div className="event-banner-body">
              <div className="event-text-box">
                <div className="event-category">{PREVIEW_EVENT.category}</div>
                <h3>{PREVIEW_EVENT.title}</h3>
                <p>{PREVIEW_EVENT.description}</p>
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
