// src/app/layout.tsx
import { ReactNode } from 'react';
import { AuthProvider } from './context/AuthContext';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
