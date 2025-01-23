'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MiImagen from '../../images/about/image2.png';

const services = [
  {
    image: MiImagen.src,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: MiImagen.src,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: MiImagen.src,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: MiImagen.src,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: MiImagen.src,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    image: MiImagen.src,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const ServiceList = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
  const isLargeScreen = useMediaQuery('(min-width:961px)');

  const itemsPerPage = isSmallScreen
    ? 1
    : isMediumScreen
    ? 2
    : isLargeScreen
    ? 4
    : 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const currentServices = services.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Grid container spacing={2}>
          {currentServices.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden relative"
                style={{ height: '100%' }}
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
                    <Box className="p-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <Typography variant="h5" className="font-bold mb-4">
                        {service.title}
                      </Typography>
                      <Typography className="text-gray-600 mb-6" style={{ flexGrow: 1 }}>
                        {service.description}
                      </Typography>
                      {/* Botón al final del contenedor */}
                      <Box>
                        <Button 
                          variant="contained"
                          className="text-white bg-[#7EADD2] hover:bg-[#00253C]"
                          fullWidth
                        >
                          Cotiza ahora
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={4}
          gap={2}
        >
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            startIcon={<ArrowBackIcon />}
            className='text-white bg-[#7EADD2] hover:bg-[#00253C]'
          >
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            endIcon={<ArrowForwardIcon />}
            className='text-white bg-[#7EADD2] hover:bg-[#00253C]'
          >
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceList;
