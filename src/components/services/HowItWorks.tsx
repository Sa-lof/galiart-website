'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { LocalShipping, Inventory, Support } from '@mui/icons-material';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <LocalShipping className="text-[#7EADD2] text-5xl" />,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: <Inventory className="text-[#7EADD2]text-5xl" />,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    icon: <Support className="text-[#7EADD2] text-5xl" />,
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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