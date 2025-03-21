'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MiImagen from '../../images/home/home1.jpg';
import MiImagen2 from '../../images/home/home2.jpg';
import MiImagen3 from '../../images/Group 1.png';

const WhyChooseUs = () => {
  return (
    <Box className="py-16">
      <Container>
        <Grid container spacing={4} className="mb-16 pt-20 pb-20">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold">
              GALIART
            </Typography>
            <Typography variant="h3" className="text-3xl font-bold mb-4">
              Sobre nosotros
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography className="text-gray-700">
            Somos una empresa 100% mexicana con 25 años de experiencia en el ramo de la fabricación de cajas de cartón caple y papel. Ubicados en el oriente de la CDMX contamos con un área de fabricación de 2000m cuadrados y una capacidad de fabricación de 400000 de cajas mensuales . Contamos con impresión desde una tinta hasta selección de colores con barniz.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h2" className="text-3xl font-bold mb-12 text-center">
          ¿Por qué escoger{' '}
          <span className="inline-flex items-center justify-center text-black">
            <Image
              src={MiImagen3}
              alt="Icono Galiart"
              width={24} 
              height={24}
              className="mr-2"
            />
            GALIART ?
          </span>
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                height: '200px',
                width: '100%',
              }}
            >
              <Image
                src={MiImagen}
                alt="Interior del almacén"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <Typography className="text-gray-700">
                25 años de experiencia en el mercado
                </Typography>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-lg"
                style={{
                  background: '#7EADD2',
                }}
              >
                <Typography variant="h3" className="text-4xl font-bold text-white mb-2">
                La más alta calidad de materiales 
                </Typography>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'stretch',
                height: '100%', 
                minHeight: '200px',
              }}
            >
              <Image
                src={MiImagen2}
                alt="Interior del almacén"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </motion.div>
          </Grid>


          <Grid item xs={12} md={4}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px', 
                height: '100%',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  background: '#7EADD2',
                  padding: '16px',
                  borderRadius: '12px',
                  flexShrink: 0, 
                }}
              >
                <Typography variant="h3" className="text-4xl font-bold text-white mb-2">
                  99.7% 
                </Typography>
                <Typography className='text-white'>Índice de servicio</Typography>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className='bg-gray-50'
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  flexGrow: 1, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textAlign: 'center',
                }}
              >
      <Typography className="text-gray-600 mt-2">
      Servicio Justo a Tiempo. Nos aseguramos de entregar cada pedido con rapidez y precisión, garantizando que nuestros clientes reciban los productos en el momento adecuado. Optimizamos la logística para minimizar retrasos y maximizar la eficiencia.
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