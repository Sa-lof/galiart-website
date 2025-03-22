'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda la producción y entrega de mis cajas?',
    answer:
      'En GALIART, contamos con 25 años de experiencia y procesos optimizados. Normalmente, el tiempo de producción y entrega varía entre 7 a 10 días hábiles, dependiendo del volumen y complejidad del pedido.',
  },
  {
    question: '¿Puedo personalizar el diseño de mis empaques?',
    answer:
      'Sí, ofrecemos soluciones de diseño personalizado. Nuestro equipo de expertos trabaja contigo para crear empaques únicos que se adapten a la imagen y necesidades de tu negocio, garantizando funcionalidad y estética.',
  },
  {
    question: '¿Qué medidas de calidad aplican en la fabricación de las cajas?',
    answer:
      'Cada caja pasa por un estricto control de calidad en todas sus etapas, desde la selección de materiales hasta el acabado final, asegurando productos duraderos y de alta presentación para proteger tus refacciones.',
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold text-center mb-12">
          Preguntas frecuentes
        </Typography>

        <Box className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                className="rounded-lg border border-gray-200 overflow-hidden"
                style={{
                  marginBottom: '1rem',
                  transition: 'all 0.3s ease',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  className="bg-white hover:bg-gray-50"
                >
                  <Typography className="font-medium">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails className="bg-white">
                  <Typography className="text-gray-600">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
