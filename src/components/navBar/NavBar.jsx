import { AppBar, Button, Drawer, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { NavListDrawer } from './NavListDrawer';
import { useState } from 'react';

export const NavBar = () => {

  const [ open, setOpen ] = useState(false);

    return (
      <>
        <AppBar
          sx={{
            zIndex: 2,
            position:'absolute',
            backgroundColor: 'transparent',
            color: '#fff',
            display: {xs: 'none', md: 'block'},
          }}
        >
          <Toolbar
            sx={{
              margin: '0 5%',
              gap: '3%'
            }}
          >
            <Button href="#quienesSomos">Quienes Somos</Button>
            <Button href="#comoTrabajamos">¿Como trabajamos?</Button>
            <Button href="#servicios">Opciones y Herramientas</Button>
            <Button href="#contratacion">Contratacion</Button>
            <Button href="#contacto">Contacto</Button>
          </Toolbar>
        </AppBar>
        <Button 
        variant="outlined"
        sx={{
          zIndex: 2,
          padding:'0',
          minWidth:'40px',
          position: 'fixed',
          top: '2.5%',
          right: {xs:'4%', lg: '1%'}
        }}
        onClick={() => setOpen(true)}
        ><Menu/></Button>

        <Drawer 
          open={open} 
          anchor='left' 
          onClick={() => setOpen(false)}
        >
          <NavListDrawer/>
        </Drawer>
      </>
    )
  }