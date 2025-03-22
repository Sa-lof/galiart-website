'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MiImagen from '../../images/about/about1.jpg';
import MiImagen2 from '../../images/about/about2.jpg';
import MiImagen3 from '../../images/about/about3.jpg';

const machinery = [
  {
    title: 'Prensa Flexográfica de Alta Velocidad',
    description:
      'Equipo de impresión de última generación que garantiza colores vivos y precisión en cada caja, adaptándose a diversos acabados y barnices.',
    image: MiImagen.src,
  },
  {
    title: 'Troqueladora Industrial',
    description:
      'Máquina de troquelado que corta y da forma al cartón con exactitud, permitiendo diseños complejos y cortes precisos para empaques únicos.',
    image: MiImagen2.src,
  },
  {
    title: 'Sistema de Ensamblaje Automatizado',
    description:
      'Tecnología de vanguardia que optimiza el proceso de plegado y ensamblaje, reduciendo tiempos de producción y garantizando la máxima calidad.',
    image: MiImagen3.src,
  },
];

const OurMachinery = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold mb-12">
          Nuestra maquinaria
        </Typography>

        {/* Horizontal Scroll Container */}
        <Box
          className="flex overflow-x-auto space-x-6"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
          }}
        >
          {machinery.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden flex-shrink-0"
              style={{
                minWidth: '500px',
                width: '500px',
              }}
            >
              <Box className="relative h-[200px]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </Box>
              <Box className="p-6">
                <Typography variant="h6" className="font-bold mb-3">
                  {item.title}
                </Typography>
                <Typography className="text-gray-600">{item.description}</Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurMachinery;
