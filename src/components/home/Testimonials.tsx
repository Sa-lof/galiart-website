'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    author: 'Lorem ipsum dolor',
    company: 'Company Name',
    stars: 5
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    author: 'Lorem ipsum dolor',
    company: 'Company Name',
    stars: 5
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    author: 'Lorem ipsum dolor',
    company: 'Company Name',
    stars: 5
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    author: 'Lorem ipsum dolor',
    company: 'Company Name',
    stars: 5
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
    author: 'Lorem ipsum dolor',
    company: 'Company Name',
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <Box className="py-16 bg-gray-50">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold text-center mb-4">
          Lo que dicen nuestros clientes
        </Typography>
        <Typography className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet
        </Typography>

        {/* Horizontal Scroll Container */}
        <Box
          className="flex overflow-x-auto space-x-6"
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md"
              style={{
                minWidth: '300px',
                maxWidth: '400px',
                padding: '1rem',
              }}
            >
              <Box className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" />
                ))}
              </Box>
              <Typography className="mb-4 text-gray-700">
                {testimonial.content}
              </Typography>
              <Box className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#7EADD2]"
                  style={{
                    backgroundColor: '#7EADD2',
                  }}
                />
                <Box>
                  <Typography className="font-medium">{testimonial.author}</Typography>
                  <Typography className="text-sm text-gray-500">
                    {testimonial.company}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
