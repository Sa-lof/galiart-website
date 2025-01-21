'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <Box>
      <Typography variant="h1" className="text-3xl md:text-4xl font-bold mb-4">
        Contáctanos
      </Typography>
      <Typography className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Box className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Email className="text-blue-600" />
          <Typography>correo@correo.com</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <Phone className="text-blue-600" />
          <Typography>55 5555 5555</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-4"
        >
          <LocationOn className="text-blue-600" />
          <Typography>
            Lorem ipsum dolor sit amet, 123, Consectetur Ave,
            <br />
            Suite 456, Dolor City, CA 78910.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContactInfo;