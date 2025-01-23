'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <Box className="pt-36">
      {/* Encabezado */}
      <Typography variant="h1" className="text-3xl md:text-4xl font-bold mb-4">
        Contáctanos
      </Typography>
      <Typography className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      {/* Información de Contacto */}
      <Box className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Email className="text-[#00253C]" />
          <Typography>correo@correo.com</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <Phone className="text-[#00253C]" />
          <Typography>55 5555 5555</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-4"
        >
          <LocationOn className="text-[#00253C]" />
          <Typography>
            Lorem ipsum dolor sit amet, 123, Consectetur Ave,
            <br />
            Suite 456, Dolor City, CA 78910.
          </Typography>
        </motion.div>
      </Box>

      <Box className="mt-12">
        <Box
          className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg"
          style={{
            position: 'relative',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.7260543957237!2d-122.0842494!3d37.4220656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c37d1b1a45%3A0x70c327288e220a36!2sGoogleplex!5e0!3m2!1ses!2smx!4v1617754637084!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfo;
