"use client";

import { createContext, useContext, useState } from "react";

type BuilderContextType = {
  prompt: string;
  setPrompt: (value: string) => void;
};

const BuilderContext = createContext<BuilderContextType | null>(null);

export function BuilderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prompt, setPrompt] = useState("");

  return (
    <BuilderContext.Provider value={{ prompt, setPrompt }}>
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilder() {
  const context = useContext(BuilderContext);

  if (!context) {
    throw new Error("useBuilder must be used inside BuilderProvider");
  }

  return context;
}