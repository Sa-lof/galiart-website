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
            Lorem ipsum dolor sit amet,
          </Typography>
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
            consectetur adipiscing elit.
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
