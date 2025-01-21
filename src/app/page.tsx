import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesSection from '@/components/home/ServicesSection';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <Testimonials />
    </main>
  );
}