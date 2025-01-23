import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Grid
} from '@mui/material';
import Image from 'next/image';
import MiImagen from '../../images/Group 1.png';

const QuoteModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = ['Servicio 1', 'Servicio 2', 'Servicio 3'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Grid container>
        {/* Columna izquierda */}
        <Grid item xs={12} md={5} sx={{ bgcolor: '#f0f4f8', padding: 4 }}>
          <Box display="flex" flexDirection="column" height="100%" justifyContent="center">
            <Box display="flex" alignItems="center" mb={2}>
              <Image
                src={MiImagen}
                alt="Galiart Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                sx={{ marginLeft: 1, color: '#2b4b6f' }}
              >
                GALIART
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Cotiza tu servicio
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>

        {/* Columna derecha */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            bgcolor: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4
          }}
        >
          <Box
            sx={{
              padding: 1,
              width: '100%',
            }}
          >
            <DialogContent>
              <TextField
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{ style: { borderRadius: '20px' } }}
              />
              <Box display="flex" gap={2}>
                <TextField
                  label="Correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{ style: { borderRadius: '20px' } }}
                />
                <TextField
                  label="Número telefónico"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{ style: { borderRadius: '20px' } }}
                />
              </Box>
              <TextField
                select
                label="Servicio"
                name="service"
                value={formData.service}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{ style: { borderRadius: '20px' } }}
              >
                {services.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
                margin="normal"
                variant="outlined"
                InputProps={{ style: { borderRadius: '20px' } }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={onClose}
                className='border-[#7EADD2] text-[#7EADD2] hover:border-[#00253C] hover:text-[#00253C]'
                variant="outlined"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                className='bg-[#7EADD2] hover:bg-[#00253C]'
              >
                Enviar
              </Button>
            </DialogActions>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default QuoteModal;
