'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Meta', icon: 'M' },
  { name: 'Apple', icon: 'A' },
  { name: 'Stark', icon: 'S' }
];

const RecentWork = () => {
  return (
    <Box className="py-16">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold mb-12">
          Nuestro más reciente trabajo
        </Typography>

        <Grid container spacing={4}>
          {/* Partners Section */}
          <Grid item xs={12} md={3}>
            <Box className="space-y-4">
              <Typography variant="h6" className="font-bold">
                Lorem ipsum dolor
              </Typography>
              <Typography className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore.
              </Typography>
              
              <Box className="space-y-3">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <Box className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      {partner.icon}
                    </Box>
                    <Typography>{partner.name}</Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Image Gallery */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={3}>
              {[1, 2, 3].map((img, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative h-[300px]"
                  >
                    <Image
                      src={`/images/work-${img}.jpg`}
                      alt={`Trabajo reciente ${img}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentWork;