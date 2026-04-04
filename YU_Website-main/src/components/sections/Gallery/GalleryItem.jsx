import React from 'react';
import { useLightbox } from '../../../context/LightboxContext';
import RemoteImage from '../../ui/RemoteImage';
import './Gallery.css';

export default function GalleryItem({ item }) {
  const { openLightbox } = useLightbox();
  const payload = {
    caption: item.caption,
    imageUrl: item.image || '',
    imageFallbackSeed: `yu-gallery-${item.id}`,
  };

  return (
    <div
      className="gallery-item reveal"
      onClick={() => openLightbox(payload)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openLightbox(payload)}
      aria-label={`View image: ${item.caption}`}
    >
      <div className="gallery-item-inner">
        {item.image ? (
          <RemoteImage
            className="gallery-photo"
            src={item.image}
            alt=""
            width={600}
            height={600}
            loading="lazy"
            fallbackSeed={`yu-gallery-${item.id}`}
          />
        ) : (
          <div className="gallery-placeholder">
            <i className={item.icon || 'fa-solid fa-image'}></i>
          </div>
        )}
        <div className="gallery-overlay">
          <i className="fa-solid fa-expand"></i>
          <span>{item.caption}</span>
        </div>
      </div>
    </div>
  );
}
