'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { LocalShipping, Inventory, Support } from '@mui/icons-material';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <LocalShipping className="text-[#7EADD2] text-5xl" />,
    title: 'Consulta y Cotización',
    description:
      'Inicia tu proyecto solicitando una cotización. Nuestro equipo te brinda asesoría especializada para diseñar la solución perfecta para tus necesidades de empaque.'
  },
  {
    icon: <Inventory className="text-[#7EADD2] text-5xl" />,
    title: 'Producción de Alta Calidad',
    description:
      'Con 25 años de experiencia y tecnología de punta, fabricamos cajas de cartón y papel con los mejores materiales, garantizando la protección de tus refacciones.'
  },
  {
    icon: <Support className="text-[#7EADD2] text-5xl" />,
    title: 'Entrega Puntual y Soporte',
    description:
      'Aseguramos entregas justas a tiempo y ofrecemos soporte postventa continuo para que tu experiencia con nosotros sea completa y satisfactoria.'
  }
];

const HowItWorks = () => {
  return (
    <Box className="py-16 pt-36">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold text-center mb-16">
          ¿Cómo funciona?
        </Typography>

        <Grid container spacing={6}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <Box className="flex justify-center mb-6">
                  {step.icon}
                </Box>
                <Typography variant="h6" className="font-bold mb-4">
                  {step.title}
                </Typography>
                <Typography className="text-gray-600">
                  {step.description}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
