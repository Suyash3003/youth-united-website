import React, { useEffect } from 'react';
import HeroSection from '../components/sections/Hero/HeroSection';
import HomeAboutSection from '../components/sections/HomeAbout/HomeAboutSection';
import EventsPreviewSection from '../components/sections/EventsPreview/EventsPreviewSection';
import TestimonialsSection from '../components/sections/Testimonials/TestimonialsSection';
import { triggerReveal } from '../utils/reveal';

export default function HomePage() {
  useEffect(() => { setTimeout(triggerReveal, 100); }, []);
  return (
    <main>
      <HeroSection />
      <EventsPreviewSection />
      <HomeAboutSection />
      <TestimonialsSection />
    </main>
  );
}
