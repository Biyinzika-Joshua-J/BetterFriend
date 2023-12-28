"use client";
import React, { createContext, useContext, useState, } from "react";

interface ModalContextType {
  open: boolean;
  setModalOpen: (openStatus: boolean) => void;
  setModalClose: (openStatus: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function setModalOpen(){
    setOpen(true);
  }
  function setModalClose(){
    setOpen(true);
  }

  return (
    <ModalContext.Provider value={{ open, setModalOpen, setModalClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}