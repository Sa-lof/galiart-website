'use client';

import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg p-6 shadow-sm"
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
          className="bg-blue-600 hover:bg-blue-700 py-3"
        >
          Enviar
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;