'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { LocalShipping, Inventory, Build, DesignServices } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MiImagen from '../../images/home/refacciones.jpg';

const services = [
  {
    icon: <DesignServices className="text-[#7EADD2] text-4xl" />,
    title: 'Diseño Personalizado',
    description: 'Creamos soluciones de empaque únicas para refacciones, adaptándonos a las necesidades específicas de cada cliente.'
  },
  {
    icon: <Inventory className="text-[#7EADD2] text-4xl" />,
    title: 'Manufactura de Cajas',
    description: 'Fabricamos cajas de cartón y papel de alta resistencia, ideales para proteger y transportar refacciones de forma segura.'
  },
  {
    icon: <Build className="text-[#7EADD2] text-4xl" />,
    title: 'Innovación en Empaques',
    description: 'Implementamos las últimas tendencias en diseño y materiales para ofrecer empaques modernos y funcionales.'
  },
  {
    icon: <LocalShipping className="text-[#7EADD2] text-4xl" />,
    title: 'Entrega Justo a Tiempo',
    description: 'Optimizamos nuestra logística para garantizar que tus pedidos lleguen en el momento exacto, sin retrasos.'
  }
];

const ServicesSection = () => {
  return (
    <Box className="py-16">
      <Container>
        <Box className="flex justify-between items-center mb-12">
          <Typography variant="h2" className="text-3xl font-bold">
            Nuestros Servicios
          </Typography>
          <Link href="/servicios">
            <Button variant="text" className="bg-[#7EADD2] hover:bg-[#00253C] text-white" href='/servicios'>
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
                  height: '250px',
                }}
              >
                <Image
                  src={MiImagen}
                  alt="Diseño de cajas"
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
                Empaques a la Medida para Refacciones
              </Typography>
              <Typography className="text-gray-600 mb-4">
                Con 25 años de experiencia, en GALIART nos especializamos en el diseño y manufactura de cajas que protegen y resaltan tus refacciones. Utilizamos materiales de alta calidad y procesos innovadores para ofrecer soluciones de empaque seguras, funcionales y estéticas.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
