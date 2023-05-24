import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Footer, Hero } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Orchids Garden',
  description: 'Orchids Garden Las Vegas Dim Sum Restaurant'
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<Navbar />*/}
        <Hero />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
