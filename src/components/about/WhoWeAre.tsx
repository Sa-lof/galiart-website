'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WhoWeAre = () => {
  return (
    <Box className="py-16">
      <Container>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h2" className="text-3xl font-bold mb-6">
                ¿Quiénes somos?
              </Typography>
              <Typography className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Typography>
              <Button 
                variant="contained" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              >
                Cotiza ahora
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/about-boxes.jpg"
                alt="Cajas y servicios"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre;