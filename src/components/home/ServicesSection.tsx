'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { LocalShipping, Inventory, Support, Assignment } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: <LocalShipping className="text-blue-600 text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    icon: <Inventory className="text-blue-600 text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    icon: <Support className="text-blue-600 text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    icon: <Assignment className="text-blue-600 text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  }
];

const ServicesSection = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Box className="flex justify-between items-center mb-12">
          <Typography variant="h2" className="text-3xl font-bold">
            Nuestros servicios
          </Typography>
          <Link href="/servicios">
            <Button variant="text" className="text-blue-600 hover:bg-blue-50">
              Descubre más
            </Button>
          </Link>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-sm h-full"
              >
                <Box className="mb-4">
                  {service.icon}
                </Box>
                <Typography variant="h6" className="font-bold mb-4">
                  {service.title}
                </Typography>
                <Typography className="text-gray-600">
                  {service.description}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" className="text-2xl md:text-3xl font-bold mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography className="text-blue-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="text-center md:text-right">
              <Button 
                variant="contained" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Cotiza ahora
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;