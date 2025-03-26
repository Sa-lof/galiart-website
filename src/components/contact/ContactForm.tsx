'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
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
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Error en el envío del correo');
      }

      const data = await res.json();
      console.log(data);
      setMessage('¡Tu mensaje ha sido enviado!');
      setFormData({
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el email', error);
      setMessage('Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSending(false);
    }
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
