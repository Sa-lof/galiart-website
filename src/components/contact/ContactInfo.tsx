"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <Box className="pt-36">
      {/* Encabezado */}
      <Typography variant="h1" className="text-3xl md:text-4xl font-bold mb-4">
        Contáctanos
      </Typography>
      <Typography className="text-gray-600 mb-8">
        En GALIART estamos a tu disposición para ayudarte a encontrar la
        solución perfecta en empaques.
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
          <Typography>5557586517</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-4"
        >
          <LocationOn className="text-[#00253C]" />
          <Typography>
            Oriente 233 #215C, Col. Agricola Oriental, CP 08500
            <br />
            Iztacalco, CDMX, México.
          </Typography>
        </motion.div>
      </Box>

      <Box className="mt-12">
        <Box
          className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg"
          style={{
            position: "relative",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.281876260183!2d-99.08039712393139!3d19.40022328187235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fc4872c96f39%3A0x2aa8c8a8a9c21242!2sOte.%20233%20215%2C%20Agr%C3%ADcola%20Oriental%2C%20Iztacalco%2C%2008500%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1743000166591!5m2!1ses!2smx"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfo;
