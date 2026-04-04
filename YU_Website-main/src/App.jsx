import React from 'react';
import { PageProvider, usePage } from './context/PageContext';
import { LightboxProvider } from './context/LightboxContext';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import Loader from './components/Loader/Loader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import MembersPage from './pages/MembersPage';
import GalleryPage from './pages/GalleryPage';
import JoinUsPage from './pages/JoinUsPage';
import './styles/global.css';

function PageRouter() {
  const { currentPage } = usePage();

  const pages = {
    home:    <HomePage />,
    about:   <AboutPage />,
    events:  <EventsPage />,
    members: <MembersPage />,
    gallery: <GalleryPage />,
    joinus:  <JoinUsPage />,
  };

  return pages[currentPage] || <HomePage />;
}

export default function App() {
  return (
    <PageProvider>
      <LightboxProvider>
        <Loader />
        <ScrollProgressBar />
        <Navbar />
        <PageRouter />
        <Footer />
      </LightboxProvider>
    </PageProvider>
  );
}
