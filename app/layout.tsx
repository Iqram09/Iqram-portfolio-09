import React from "react";
import './globals.css'; // Import global styles

export const metadata = {
  title: 'Iqram Patel | Software Developer',
  description: 'Portfolio of Iqram Patel, a Software Developer',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-black text-white py-4 px-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Iqram Patel. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
