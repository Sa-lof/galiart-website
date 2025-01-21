'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const machinery = [
  {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/machinery-1.jpg'
  },
  {
    title: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/machinery-2.jpg'
  }
];

const OurMachinery = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold mb-12">
          Nuestra maquinaria
        </Typography>

        <Grid container spacing={6}>
          {machinery.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <Box className="relative h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </Box>
                <Box className="p-6">
                  <Typography variant="h6" className="font-bold mb-3">
                    {item.title}
                  </Typography>
                  <Typography className="text-gray-600">
                    {item.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMachinery;