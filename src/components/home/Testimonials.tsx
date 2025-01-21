'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  }
];

const Testimonials = () => {
  return (
    <Box className="py-16">
      <Container>
        <Typography variant="h2" className="text-3xl font-bold text-center mb-4">
          Lo que dicen nuestros clientes
        </Typography>
        <Typography className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet
        </Typography>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-lg h-full"
              >
                <Box className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </Box>
                <Typography className="mb-6 text-gray-700">
                  {testimonial.content}
                </Typography>
                <Box className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600" />
                  <Box>
                    <Typography className="font-medium">
                      {testimonial.author}
                    </Typography>
                    <Typography className="text-sm text-gray-500">
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;