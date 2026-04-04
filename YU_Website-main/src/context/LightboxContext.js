import React, { createContext, useContext, useState, useCallback } from 'react';

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFallbackSeed, setImageFallbackSeed] = useState('');

  const openLightbox = useCallback((payload) => {
    if (typeof payload === 'string') {
      setCaption(payload);
      setImageUrl('');
      setImageFallbackSeed('');
    } else {
      setCaption(payload?.caption ?? '');
      setImageUrl(payload?.imageUrl ?? '');
      setImageFallbackSeed(payload?.imageFallbackSeed ?? '');
    }
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setCaption('');
    setImageUrl('');
    setImageFallbackSeed('');
    document.body.style.overflow = '';
  }, []);

  return (
    <LightboxContext.Provider
      value={{ isOpen, caption, imageUrl, imageFallbackSeed, openLightbox, closeLightbox }}
    >
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider');
  return ctx;
}
