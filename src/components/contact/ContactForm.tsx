'use client';

import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  nombre: string;
  correo: string;
  asunto: string;
  mensaje: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    emailjs.send(
      'YOUR_SERVICE_ID',    // Reemplaza con tu Service ID de EmailJS
      'YOUR_TEMPLATE_ID',   // Reemplaza con tu Template ID de EmailJS
      formData as unknown as Record<string, unknown>,
      'YOUR_PUBLIC_KEY'     // Reemplaza con tu Public Key de EmailJS
    ).then(
      (response) => {
        console.log('Email enviado exitosamente:', response.status, response.text);
        setMessage('¡Tu mensaje ha sido enviado!');
        setFormData({
          nombre: '',
          correo: '',
          asunto: '',
          mensaje: ''
        });
      },
      (err) => {
        console.error('Error al enviar el email:', err);
        setMessage('Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.');
      }
    ).finally(() => {
      setIsSending(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-sm pt-10 sm:pt-20 md:pt-40 lg:pt-40"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          name="nombre"
          label="Nombre"
          variant="outlined"
          value={formData.nombre}
          onChange={handleChange}
          className="bg-white"
        />

        <TextField
          fullWidth
          name="correo"
          label="Correo electrónico"
          type="email"
          variant="outlined"
          value={formData.correo}
          onChange={handleChange}
          className="bg-white"
        />

        <TextField
          fullWidth
          name="asunto"
          label="Asunto"
          variant="outlined"
          value={formData.asunto}
          onChange={handleChange}
          className="bg-white"
        />

        <TextField
          fullWidth
          name="mensaje"
          label="Mensaje"
          multiline
          rows={4}
          variant="outlined"
          value={formData.mensaje}
          onChange={handleChange}
          className="bg-white"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSending}
          className="text-white bg-[#7EADD2] hover:bg-[#00253C] py-3"
        >
          {isSending ? 'Enviando...' : 'Enviar'}
        </Button>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </motion.div>
  );
};

export default ContactForm;
