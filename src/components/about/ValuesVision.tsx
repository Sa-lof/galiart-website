'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Inventory2 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MiImagen from '../../images/main.svg';

const values = [
  "Calidad y Precisión: Cada caja es diseñada y fabricada con altos estándares para proteger tus refacciones.",
  "Innovación: Desarrollamos soluciones creativas y personalizadas que marcan la diferencia en el mercado.",
  "Compromiso: Nuestro equipo se dedica a ofrecer un servicio excepcional y entregas puntuales.",
  "Sostenibilidad: Adoptamos prácticas responsables para cuidar el medio ambiente y optimizar nuestros recursos."
];

const ValuesVision = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm h-full"
            >
              <Typography variant="h3" className="text-2xl font-bold mb-4">
                ¿Quiénes somos?
              </Typography>
              <Typography className="mb-4">
                Somos una empresa 100% mexicana con 25 años de experiencia en el ramo de la fabricación de cajas de cartón caple y papel. Ubicados en el oriente de la CDMX contamos con un área de fabricación de 2000 m² y una capacidad de producción de 400,000 cajas mensuales. Contamos con impresión que va desde una tinta hasta selección de colores con barniz.
              </Typography>
              <Box className="relative w-full h-[300px] mt-4">
                <Image
                  src={MiImagen}
                  alt="GALIART"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <Grid container spacing={4} className="h-full">
                <Grid item xs={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-sm h-full"
                  >
                    <Typography variant="h3" className="text-2xl font-bold mb-6">
                      Valores
                    </Typography>
                    <Box className="space-y-4">
                      {values.map((value, index) => (
                        <Box key={index} className="flex items-center gap-3">
                          <Inventory2 className="text-[#7EADD2]" />
                          <Typography>{value}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-[#7EADD2] text-white p-6 rounded-lg shadow-sm h-full"
                  >
                    <Typography variant="h3" className="text-2xl font-bold mb-6">
                      Misión y Visión
                    </Typography>
                    <Typography>
                      Ser el mejor socio en el sector de empaques, liderando con calidad y servicio. Ofrecer un ambiente seguro e incluyente que genere oportunidades significativas de trabajo, fomente el desarrollo de habilidades y promueva carreras profesionales exitosas. Además, cuidamos nuestros recursos naturales y adoptamos prácticas sostenibles para contribuir a un planeta más saludable.
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ValuesVision;
