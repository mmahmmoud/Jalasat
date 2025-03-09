"use client";

import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        className: 'border-none bg-dark-1 text-white',
        duration: 5000,
      }}
    />
  );
}