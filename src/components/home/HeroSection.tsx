'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MiImagen from '../../images/home/home4.png';
import nissan from '../../images/home/nissan.jpeg';
import ford from '../../images/home/ford.jpeg';
import fram from '../../images/home/Fram.jpeg';
import wix from '../../images/home/wix.png';

const empresas = [
  { nombre: 'Nissan Mexicana', logo: nissan },
  { nombre: 'Ford Motor Company México', logo: ford },
  { nombre: 'Fram Group', logo: fram },
  { nombre: 'Wix Filters', logo: wix }
];

const HeroSection = () => {
  return (
    <Box className="bg-blue-50 min-h-screen flex items-center pt-36">
      <Container>
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-4">
            No solo entregamos productos, entregamos confianza y compromiso.
            </Typography>
            <Typography className="text-gray-600 mb-6">
            Transformamos cartón y papel en soluciones de empaque eficientes y personalizadas.
            </Typography>
            
            <Box className="flex gap-4 mb-8">
              <Button 
                variant="contained" 
                className="bg-[#7EADD2] hover:bg-[#00253C] text-white px-6 py-2"
              >
                Cotiza ahora
              </Button>
              <Button 
                variant="outlined" 
                className="border-[#7EADD2] text-[#7EADD2] hover:border-[#00253C] hover:text-[#00253C] px-6 py-2"
              >
                Descubre más
              </Button>
            </Box>

            <Box className="mt-8">
              <Typography className="text-gray-600 text-left mb-4">
                Más de 40 empresas confían en GALIART
              </Typography>
              <Box className="flex justify-left gap-4">
                {empresas.map((empresa, index) => (
                  <Box 
                    key={index} 
                    className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-200"
                  >
                    <Image 
                      src={empresa.logo} 
                      alt={empresa.nombre} 
                      width={64} 
                      height={64} 
                      className="object-cover w-full h-full"
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src={MiImagen}
              alt="Cajas de envío"
              fill
              className="object-contain"
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
