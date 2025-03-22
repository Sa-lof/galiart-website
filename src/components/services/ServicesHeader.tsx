'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ServicesHeader = () => {
  return (
    <Box className="pt-30 py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros servicios
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 mx-auto text-left">
            En GALIART nos especializamos en el diseño y manufactura de cajas personalizadas para empacar refacciones. Con más de 25 años de experiencia y tecnología de vanguardia, ofrecemos soluciones de empaque seguras, eficientes y adaptadas a las necesidades de tu negocio.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesHeader;
