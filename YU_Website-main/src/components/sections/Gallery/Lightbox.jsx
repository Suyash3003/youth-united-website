import React, { useEffect } from 'react';
import { useLightbox } from '../../../context/LightboxContext';
import RemoteImage from '../../ui/RemoteImage';

export default function Lightbox() {
  const { isOpen, caption, imageUrl, imageFallbackSeed, closeLightbox } = useLightbox();

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeLightbox]);

  if (!isOpen) return null;

  const seed = imageFallbackSeed || `yu-lb-${caption.slice(0, 40)}`;

  return (
    <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={caption}>
      <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {imageUrl ? (
          <RemoteImage
            className="lightbox-photo"
            src={imageUrl}
            alt={caption}
            width={1200}
            height={800}
            fallbackSeed={seed}
          />
        ) : (
          <div className="lightbox-img-placeholder">
            <i className="fa-solid fa-image"></i>
          </div>
        )}
        <p className="lightbox-caption">{caption}</p>
      </div>
    </div>
  );
}
