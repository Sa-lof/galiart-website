'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import { motion } from 'framer-motion';

const values = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor',
  'Lorem ipsum dolor et',
  'Lorem ipsum dolor'
];

const ValuesVision = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Grid container spacing={6}>
          {/* Values Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm h-full"
            >
              <Typography variant="h3" className="text-2xl font-bold mb-6">
                Valores
              </Typography>
              <Box className="space-y-4">
                {values.map((value, index) => (
                  <Box key={index} className="flex items-center gap-3">
                    <Check className="text-blue-600" />
                    <Typography>{value}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Mission Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-600 text-white p-6 rounded-lg shadow-sm h-full"
            >
              <Typography variant="h3" className="text-2xl font-bold mb-6">
                Misión
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
            </motion.div>
          </Grid>

          {/* Vision Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-blue-50 p-6 rounded-lg shadow-sm h-full"
            >
              <Typography variant="h3" className="text-2xl font-bold mb-6">
                Visión
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ValuesVision;