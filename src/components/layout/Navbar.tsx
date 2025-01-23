'use client';

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import MiImagen from '../../images/Group 1.png';
import QuoteModal from '../layout/CotizarModal';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const allLinks = [
    ...navLinks,
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const mobileMenu = (
    <Box className="h-full bg-white p-4">
      <Box className="flex justify-end mb-4">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {allLinks.map((link) => (
          <ListItem 
            key={link.href}
            onClick={handleDrawerToggle}
            className={`rounded-[30px] mb-2 ${
              isActiveLink(link.href) 
                ? 'bg-[#7EADD2] text-white font-bold' 
                : 'hover:bg-gray-50'
            }`}
          >
            <Link href={link.href} className="w-full py-2">
              <ListItemText primary={link.label} />
            </Link>
          </ListItem>
        ))}
        <ListItem
        onClick={() => {
          handleModalOpen();
          handleDrawerToggle();
        }}
        className="rounded-[30px] bg-[#00253C] hover:bg-[#7EADD2] text-white text-center py-2 mt-4 cursor-pointer"
      >
        Cotiza ahora
      </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" className="bg-white shadow-none">
      {/* Sección Azul */}
      <Box className="bg-[#7EADD2] py-2 text-center">
        <Typography className="text-sm text-white font-medium">
          Descubre todo lo que <span className="font-bold">GALIART</span> tiene para ti
        </Typography>
      </Box>

      <Toolbar className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={MiImagen}
            alt="Galiart Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
          <Typography variant="h6" className="text-[#00253C] font-bold">
            GALIART
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <Box className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-800 hover:text-[#7EADD2] transition-colors ${
                isActiveLink(link.href) ? 'font-bold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </Box>

        {/* Botón Cotiza ahora (desktop) */}
        <Box className="hidden md:block">
          <Button
            variant="contained"
            className="bg-[#00253C] hover:bg-[#7EADD2] px-6 py-2 rounded-[30px]"
            onClick={handleModalOpen}
          >
            Cotiza ahora
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box className="md:hidden">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon className="text-gray-800" />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          PaperProps={{
            className: 'w-[280px]'
          }}
        >
          {mobileMenu}
        </Drawer>
      </Toolbar>

      {/* Modal Cotiza ahora */}
      <QuoteModal open={isModalOpen} onClose={handleModalClose} />
    </AppBar>
  );
};

export default Navbar;