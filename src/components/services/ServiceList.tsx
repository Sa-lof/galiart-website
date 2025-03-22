'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DesignServices, Inventory, Build, LocalShipping } from '@mui/icons-material';

const services = [
  {
    icon: <DesignServices className="text-[#7EADD2] text-6xl" />,
    title: 'Diseño Personalizado',
    description:
      'Creamos empaques únicos a la medida, diseñados para destacar y proteger tus refacciones, combinando funcionalidad y estilo.',
  },
  {
    icon: <Inventory className="text-[#7EADD2] text-6xl" />,
    title: 'Manufactura de Calidad',
    description:
      'Utilizamos materiales de primera calidad y tecnología de punta para producir cajas duraderas que cumplen con los estándares más altos.',
  },
  {
    icon: <Build className="text-[#7EADD2] text-6xl" />,
    title: 'Innovación en Empaques',
    description:
      'Implementamos las últimas tendencias en diseño y procesos, optimizando la eficiencia y el impacto visual de tus empaques.',
  },
  {
    icon: <LocalShipping className="text-[#7EADD2] text-6xl" />,
    title: 'Logística y Entrega Puntual',
    description:
      'Nuestra cadena de suministro garantiza que cada pedido se entregue a tiempo, sin importar la magnitud del proyecto.',
  },
  {
    icon: <DesignServices className="text-[#7EADD2] text-6xl" />,
    title: 'Asesoría Especializada',
    description:
      'Contamos con un equipo de expertos que te acompaña en cada paso del proceso, desde el diseño hasta la entrega final.',
  },
  {
    icon: <Inventory className="text-[#7EADD2] text-6xl" />,
    title: 'Control de Calidad Riguroso',
    description:
      'Cada caja pasa por un estricto control de calidad para asegurar que el producto final cumpla con tus expectativas y estándares.',
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
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
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
                    <Box className="flex items-center justify-center h-[300px]">
                      {service.icon}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box
                      className="p-6"
                      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      <Typography variant="h5" className="font-bold mb-4">
                        {service.title}
                      </Typography>
                      <Typography className="text-gray-600 mb-6" style={{ flexGrow: 1 }}>
                        {service.description}
                      </Typography>
                      <Box>
                        <Button
                          variant="contained"
                          className="text-white bg-[#7EADD2] hover:bg-[#00253C]"
                          fullWidth
                          href='/contacto'
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
        <Box display="flex" justifyContent="center" alignItems="center" mt={4} gap={2}>
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={currentPage === 0}
            startIcon={<ArrowBackIcon />}
            className="text-white bg-[#7EADD2] hover:bg-[#00253C]"
          />
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            endIcon={<ArrowForwardIcon />}
            className="text-white bg-[#7EADD2] hover:bg-[#00253C]"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceList;
