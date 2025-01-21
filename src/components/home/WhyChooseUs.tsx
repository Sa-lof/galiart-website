'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <Box className="py-16">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold mb-12 text-center">
          ¿Por qué escoger <span className="text-blue-600">GALIART</span>?
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-lg h-full"
            >
              <Box className="relative h-48 mb-4">
                <Image
                  src="/images/warehouse.jpg"
                  alt="Almacén"
                  fill
                  className="rounded-lg object-cover"
                />
              </Box>
              <Typography variant="h6" className="font-bold mb-2">
                Lorem ipsum dolor sit amet
              </Typography>
              <Typography className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-full aspect-[4/3]"
            >
              <Image
                src="/images/warehouse-interior.jpg"
                alt="Interior del almacén"
                fill
                className="rounded-lg object-cover"
              />
              <Box className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <Typography className="text-white mb-2 text-2xl font-bold">0%</Typography>
                <Typography className="text-white">Lorem ipsum dolor</Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-blue-100 p-6 rounded-lg"
              >
                <Typography variant="h3" className="text-4xl font-bold text-blue-600 mb-2">
                  00
                </Typography>
                <Typography>Proyectos</Typography>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-blue-100 p-6 rounded-lg"
              >
                <Typography variant="h3" className="text-4xl font-bold text-blue-600 mb-2">
                  0%
                </Typography>
                <Typography>Lorem ipsum</Typography>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-blue-100 p-6 rounded-lg"
              >
                <Typography className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore.
                </Typography>
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;