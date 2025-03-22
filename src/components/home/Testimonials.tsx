'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: 'La calidad de las cajas de GALIART es insuperable. Siempre cumplen con mis expectativas en diseño y resistencia.',
    author: 'Carlos López',
    company: 'Auto Refacciones S.A.',
    stars: 5
  },
  {
    content: 'Excelente servicio y puntualidad. Las cajas son ideales para proteger refacciones delicadas.',
    author: 'Ana Martínez',
    company: 'Refacciones del Centro',
    stars: 5
  },
  {
    content: 'Innovación y compromiso en cada proyecto. GALIART ha sido nuestro aliado estratégico en empaque.',
    author: 'Jorge Ramírez',
    company: 'Distribuidora Automotriz',
    stars: 5
  },
  {
    content: 'Recomiendo a GALIART por su atención personalizada y la calidad de sus productos. Transforman cada idea en un empaque funcional y atractivo.',
    author: 'María González',
    company: 'Taller Automotriz',
    stars: 5
  },
  {
    content: 'Con más de 25 años en el mercado, su experiencia se refleja en cada detalle de sus cajas. Muy satisfecho con el servicio.',
    author: 'Ricardo Hernández',
    company: 'Mecánica Moderna',
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold text-center mb-4">
          Lo que dicen nuestros clientes
        </Typography>
        <Typography className="text-center text-gray-600 mb-12">
          La satisfacción de nuestros clientes es nuestro mejor aval.
        </Typography>

        {/* Contenedor de scroll horizontal */}
        <Box
          className="flex overflow-x-auto space-x-6"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md"
              style={{
                minWidth: '300px',
                maxWidth: '400px',
                padding: '1rem',
              }}
            >
              <Box className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" />
                ))}
              </Box>
              <Typography className="mb-4 text-gray-700">
                {testimonial.content}
              </Typography>
              <Box className="flex items-center gap-3">
                <Box>
                  <Typography className="font-medium">{testimonial.author}</Typography>
                  <Typography className="text-sm text-gray-500">
                    {testimonial.company}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
