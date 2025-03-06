'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Inventory2 } from '@mui/icons-material';
import { motion } from 'framer-motion';
import MiImagen from '../../images/about/about4.png';

const values = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor',
  'Lorem ipsum dolor si',
  'Lorem ipsum dolor'
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
            style={{
              backgroundImage: `url(${MiImagen.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography variant="h3" className="text-2xl font-bold mb-4">
              ¿Quiénes somos?
            </Typography>
            <Typography className="mb-4">
            Somos una empresa 100% mexicana con 25 años de experiencia en el ramo de la fabricación de cajas de cartón caple y papel. Ubicados en el oriente de la CDMX contamos con un área de fabricación de 2000m cuadrados y una capacidad de fabricación de 400000 de cajas mensuales . Contamos con impresión desde una tinta hasta selección de colores con barniz.
            </Typography>
            <Button variant="contained" className="text-white bg-[#7EADD2] hover:bg-[#00253C]">
              Cotiza ahora
            </Button>
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
                        Ser el mejor socio posible al liderear con calidad y servicio en el ramo. 
Ofrecer un espacio seguro e incluyente,así oportunidades significativas de trabajo,adquirir nuevas habilidades y desarrollar carreras profesionales con éxito. 
Cuidar nuestros recursos naturales y fomentar prácticas que ayuden a tener un planeta más sostenible
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
