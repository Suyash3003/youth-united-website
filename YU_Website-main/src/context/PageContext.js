import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext(null);

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within PageProvider');
  return ctx;
}
