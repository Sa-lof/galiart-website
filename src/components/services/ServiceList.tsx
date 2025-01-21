'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    image: '/images/warehouse-1.jpg',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image: '/images/warehouse-2.jpg',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image: '/images/warehouse-3.jpg',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    image: '/images/warehouse-4.jpg',
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

const ServiceList = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <Box className="relative h-[300px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box className="p-6">
                      <Typography variant="h5" className="font-bold mb-4">
                        {service.title}
                      </Typography>
                      <Typography className="text-gray-600 mb-6">
                        {service.description}
                      </Typography>
                      <Button 
                        variant="contained"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Cotiza ahora
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceList;