import React, { useState, useMemo, useContext } from 'react';

// Create a store context
const DropdownContext = React.createContext();

export function DropdownToggleProvider({ children, value }) {
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdownToggleContext() {
  return useContext(DropdownContext);
}
