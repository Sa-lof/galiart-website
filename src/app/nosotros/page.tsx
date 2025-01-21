import React from 'react';
import WhoWeAre from '@/components/about/WhoWeAre';
import ValuesVision from '@/components/about/ValuesVision';
import RecentWork from '@/components/about/RecentWork';
import OurMachinery from '@/components/about/OurMachinery';

export const metadata = {
  title: 'Nosotros | Galiart',
  description: 'Conoce más sobre Galiart y nuestros servicios logísticos',
};

export default function AboutPage() {
  return (
    <main>
      <WhoWeAre />
      <ValuesVision />
      <RecentWork />
      <OurMachinery />
    </main>
  );
}