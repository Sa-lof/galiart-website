import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import MiImagen from '../../images/Group 1.png';

const Footer = () => {
  return (
    <Box className="bg-[#7EADD2] text-white">
      <Container>
        <Box className="py-16">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box className="mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={MiImagen}
                    alt="GALIART Logo"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                  <Typography variant="h6" className="text-[#00253C] font-bold">
                    GALIART
                  </Typography>
                </Link>
              </Box>
              <Typography variant="h3" className="text-2xl font-bold mb-4">
                Empaques Innovadores para Refacciones
              </Typography>
              <Typography className="mb-6 text-blue-100">
                Con 25 años de experiencia, en GALIART transformamos cartón y papel en soluciones de empaque seguras y personalizadas, garantizando la protección y presentación de tus refacciones.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={4}>
                <Grid item xs={6} sm={4}>
                  <Typography className="font-bold mb-4">Enlaces rápidos</Typography>
                  <Box className="space-y-2">
                    <Link href="/" className="text-blue-100 hover:text-white block">
                      Inicio
                    </Link>
                    <Link href="/nosotros" className="text-blue-100 hover:text-white block">
                      Nosotros
                    </Link>
                    <Link href="/servicios" className="text-blue-100 hover:text-white block">
                      Servicios
                    </Link>
                    <Link href="/contacto" className="text-blue-100 hover:text-white block">
                      Contacto
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={6} sm={4}>
                  <Typography className="font-bold mb-4">Servicios</Typography>
                  <Box className="space-y-2">
                    {['Diseño Personalizado', 'Manufactura de Cajas', 'Innovación en Empaques', 'Entrega Justo a Tiempo'].map((service, index) => (
                      <Link
                        key={index}
                        href="/servicios"
                        className="text-blue-100 hover:text-white block"
                      >
                        {service}
                      </Link>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography className="font-bold mb-4">Contacto</Typography>
                  <Box className="space-y-2">
                    <Typography className="text-blue-100">
                      Email: georgessemaan576@gmail.com
                    </Typography>
                    <Typography className="text-blue-100">
                      Tel: 5557586517
                    </Typography>
                    
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box className="border-t border-white py-6">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography className="text-blue-100">
                © Copyright GALIART 2024. by <Link href="https://amoxtli.tech" target="_blank">Amoxtli Web Developers</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
