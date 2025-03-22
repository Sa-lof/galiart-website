'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <Box className="pt-36 py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
            25 Años de Experiencia en Empaques Innovadores
          </Typography>
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Calidad y Compromiso 100% Mexicano
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 max-w-2xl mx-auto">
            En GALIART nos especializamos en el diseño y manufactura de cajas para empacar refacciones.
            Con instalaciones en el oriente de la CDMX y la capacidad de producir hasta 400,000 cajas mensuales,
            transformamos cartón y papel en soluciones de empaque seguras, eficientes y personalizadas.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
