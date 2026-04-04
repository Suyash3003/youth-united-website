import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext(null);

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeEventId, setActiveEventId] = useState(null);

  const navigateTo = (page, evId = null) => {
    setCurrentPage(page);
    setActiveEventId(evId);
    window.scrollTo(0, 0);
  };

  return (
    <PageContext.Provider value={{ currentPage, navigateTo, activeEventId }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within PageProvider');
  return ctx;
}
