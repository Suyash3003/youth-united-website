import React, { useEffect } from 'react';
import galleryItems from '../data/gallery';
import GalleryItem from '../components/sections/Gallery/GalleryItem';
import Lightbox from '../components/sections/Gallery/Lightbox';
import { triggerReveal } from '../utils/reveal';
import '../components/sections/Gallery/Gallery.css';
import '../components/sections/About/About.css';

export default function GalleryPage() {
  useEffect(() => { setTimeout(triggerReveal, 100); }, []);

  return (
    <main>
      <div className="about-hero" style={{ minHeight: '320px' }}>
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <span className="page-label">Gallery</span>
          <h1>Moments That <em style={{ fontStyle:'italic', color:'var(--green-soft)' }}>Matter</em></h1>
          <p>A visual record of our events, drives, and the people who make them possible.</p>
        </div>
      </div>

      <section>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="gallery-grid">
            {galleryItems.map(item => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <Lightbox />
    </main>
  );
}
