'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { LocalShipping, Inventory, Support, Assignment } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MiImagen from '../../images/home/image-removebg-preview (1) 1.png';

const services = [
  {
    icon: <LocalShipping className="text-[#7EADD2] text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    icon: <Inventory className="text-[#7EADD2] text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    icon: <Support className="text-[#7EADD2] text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  },
  {
    icon: <Assignment className="text-[#7EADD2] text-4xl" />,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
  }
];

const ServicesSection = () => {
  return (
    <Box className="py-16">
      <Container>
        <Box className="flex justify-between items-center mb-12">
          <Typography variant="h2" className="text-3xl font-bold">
            Nuestros servicios
          </Typography>
          <Link href="/servicios">
            <Button variant="text" className="bg-[#7EADD2] hover:bg-[#00253C] text-white">
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

        <Box className="mt-16 bg-gray-100 rounded-lg p-8">
          <Grid container spacing={4} alignItems="center">
            {/* Imagen a la izquierda */}
            <Grid item xs={12} md={6}>
              <Box
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  width: '100%',
                  height: '250px', // Altura fija para la imagen
                }}
              >
                <Image
                  src={MiImagen}
                  alt="Cajas"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            {/* Contenido a la derecha */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                className="text-2xl md:text-3xl font-bold mb-4 text-gray-800"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </Typography>
              <Button
                variant="contained"
                className="bg-[#7EADD2] hover:bg-[#00253C] text-white px-6 py-2 rounded-lg"
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