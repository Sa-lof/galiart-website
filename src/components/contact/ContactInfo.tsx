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
        En GALIART estamos a tu disposición para ayudarte a encontrar la solución perfecta en empaques.
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
          <Typography>georgessemaan576@gmail.com</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <Phone className="text-[#00253C]" />
          <Typography>55 1234 5678</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-4"
        >
          <LocationOn className="text-[#00253C]" />
          <Typography>
            Av. Industrial 456, Col. Tecnológica,
            <br />
            Iztapalapa, CDMX, México.
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8537842752786!2d-99.08549468456765!3d19.39100378697195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3b7af3a7f9%3A0x9e7c91a6f9e2b2f1!2sCDMX%2C%20M%C3%A9xico!5e0!3m2!1ses!2sus!4v1680000000000"
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
