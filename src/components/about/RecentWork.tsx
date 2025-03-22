"use client";

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";
import nissan from "../../images/home/nissan.jpeg";
import ford from "../../images/home/ford.jpeg";
import fram from "../../images/home/Fram.jpeg";

const partners = [
  {
    name: "Nissan",
    logo: nissan,
    description:
      "Diseñamos empaques innovadores para Nissan que optimizan la logística y protegen sus refacciones de manera eficiente.",
  },
  {
    name: "Ford",
    logo: ford,
    description:
      "Creamos soluciones de empaques personalizados para Ford, garantizando seguridad y una excelente presentación de sus productos.",
  },
  {
    name: "Fragroup",
    logo: fram,
    description:
      "Implementamos procesos de manufactura de alta precisión para Fragroup, asegurando empaques a la medida y de alta calidad.",
  },
];

const RecentWork = () => {
  return (
    <Box className="py-16">
      <Container>
        <Typography
          variant="h2"
          className="text-3xl font-bold mb-12 text-center"
        >
          Nuestro Trabajo Reciente
        </Typography>
        <Grid container spacing={4}>
          {partners.map((partner, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                <Box className="w-20 h-20 relative mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </Box>
                <Typography variant="h6" className="font-bold mb-2">
                  {partner.name}
                </Typography>
                <Typography className="text-gray-600">
                  {partner.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentWork;
