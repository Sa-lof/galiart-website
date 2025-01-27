'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MiImagen from '../../images/about/client1.jpg';
import MiImagen2 from '../../images/about/client2.jpg';
import MiImagen3 from '../../images/about/client3.jpg';

const partners = [
  { name: 'Meta', icon: 'M', gallery: [MiImagen.src, MiImagen.src, MiImagen.src] },
  { name: 'Apple', icon: 'A', gallery: [MiImagen2.src, MiImagen2.src, MiImagen2.src] },
  { name: 'Stark', icon: 'S', gallery: [MiImagen3.src, MiImagen3.src, MiImagen3.src] },
];

const RecentWork = () => {
  const [selectedPartner, setSelectedPartner] = useState(partners[0]);

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>

              <Box className="space-y-3">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-3 cursor-pointer ${
                      selectedPartner.name === partner.name ? 'text-[#7EADD2] font-bold' : ''
                    }`}
                    onClick={() => setSelectedPartner(partner)}
                  >
                    <Box className="w-10 h-10 rounded-full bg-[#7EADD2] text-white flex items-center justify-center">
                      {partner.icon}
                    </Box>
                    <Typography>{partner.name}</Typography>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Image Gallery with Horizontal Scroll */}
          <Grid item xs={12} md={9}>
            <Box
              className="flex overflow-x-auto space-x-4"
              style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '1rem',
                paddingBottom: '1rem',
                scrollbarWidth: 'none',
              }}
            >
              {selectedPartner.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  style={{
                    minWidth: '300px',
                    height: '300px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={img}
                    alt={`Trabajo reciente ${selectedPartner.name} ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentWork;
