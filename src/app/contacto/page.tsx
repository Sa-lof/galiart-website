import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import FAQ from '@/components/contact/FAQ';

export const metadata = {
  title: 'Contacto | Galiart',
  description: 'Contáctanos para más información sobre nuestros servicios',
};

export default function ContactPage() {
  return (
    <main>
      <Box className="py-16">
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <ContactInfo />
            </Grid>
            <Grid item xs={12} md={5}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FAQ />
    </main>
  );
}