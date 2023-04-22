import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Orchids Garden',
  description: 'Orchids Garden Las Vegas Dim Sum Restaurant'
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}

export default RootLayout;
