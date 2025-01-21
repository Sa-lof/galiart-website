'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ServicesHeader = () => {
  return (
    <Box className="py-24 bg-blue-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros servicios
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesHeader;