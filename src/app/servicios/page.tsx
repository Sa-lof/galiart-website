import React from 'react';
import ServicesHeader from '@/components/services/ServicesHeader';
import HowItWorks from '@/components/services/HowItWorks';
import ServiceList from '@/components/services/ServiceList';

export const metadata = {
  title: 'Servicios | Galiart',
  description: 'Descubre nuestros servicios logísticos profesionales',
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeader />
      <HowItWorks />
      <ServiceList />
    </main>
  );
}