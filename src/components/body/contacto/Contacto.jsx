import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Wapp from '../../../assets/img/Wapp.png';
import Outlook from '../../../assets/img/outlook.png';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nikgrmd', 'template_8qnf14u', form.current, 'Pw3QahyAlLA7DCpOw')
      .then((result) => {
          console.log(result.text);
          Swal.fire('¡Exito!', 'El email se ha enviado correctamente', 'success')
      }, (error) => {
          console.log(error.text);
          alert("Ups! Hubo un error al enviar el email.");
      });
  };

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#EFE7DD',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EFE7DD',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#EFE7DD',
      },
      '&:hover fieldset': {
        borderColor: '#EFE7DD',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#EFE7DD',
      },
    },
  });

  return (
    <>
      <Grid
        id="contacto"
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          padding: {xs: '10% 5% 0', lg: '3% 5% 0'},
        }}
      >
        <Box
          sx={{
              display: {xs:'flex'},
              justifyContent: {xs:'center', lg: 'start'},
          }}
        >
          <Typography
            sx={{
                fontFamily: 'Sorts Mill Goudy',
                fontSize: {xs:'40px', lg: '60px'},
                fontWeight: '500',
                textAlign: {xs:'center'},
                color: 'primary.main',
                marginBottom: {xs: '7%', lg: '2%'}
            }}
          >
              Contacto
          </Typography>
        </Box>
        <Typography
          sx={{
              textAlign: {xs: 'center', lg:'start'},
              fontSize: {xs:'18px'},
              fontFamily: 'Montserrat',
              color: 'fourth.main',
              m: {xs:'0 5% 5%', lg:'0 5% 2%'}
          }}
        > 
        ¡Escribinos un mensaje! Su consulta no molesta.
        </Typography>
        <Box
          sx={{
            display: 'grid',
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <CssTextField
              id="outlined-multiline-flexible"
              label="Nombre"
              type="text" name="user_name"
              multiline
              sx={{
                width: {xs:'90%', lg: '50%'},
                m: {xs:'2% 5%', lg: '0 5%'},
              }}
            />
            <CssTextField
              id="outlined-multiline-flexible"
              label="Email"
              type="email" name="user_email" 
              multiline
              sx={{
                width: {xs:'90%', lg: '50%'},
                m: {xs:'2% 5%'},
              }}
            />
            <CssTextField
              id="outlined-multiline-static"
              label="Mensaje"
              type="text" name="message"
              multiline
              rows={10}
              defaultValue="Escriba aqui..."
              sx={{
                width: {xs:'90%'},
                m: {xs:'5%', lg: '0 5%'}
              }}
            />

              <Button variant="outlined" type="submit" value="Send"
                sx={{
                  m: {xs:'2% 5% 10%', lg: '2% 5% 0'},
                }}
              >Enviar</Button>
          </form>
        </Box>
      </Grid>
      <Typography
          sx={{
              textAlign: 'center',
              fontSize: {xs:'18px'},
              fontFamily: 'Montserrat',
              color: 'fourth.main',
              m: {xs:'5% 5% 0', lg: '2% 5%'}
          }}
        > 
        También podes contactarnos por WhatsApp o a nuestro e-mail:
        </Typography>
      <Grid
        container
        sx={{
          display: 'grid',
          gridTemplateColumns: {xs:'1fr', lg: '1fr 1fr'},
          padding: {xs: '10% 5%', lg: '5% 10% 10%'}
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5%',
            mb: {xs:'5%', lg: '0'},
            color: 'primary.main'
          }}
        >
          <img src={Wapp} alt="logo WhatsApp" className='icono'/>
          <Typography 
          sx={{
            textAlign: 'center',
            fontSize: {xs:'18px'},
            fontFamily: 'Montserrat',
          }}
          >+54 9 11 6730-3293</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5%',
            color: 'primary.main',
            pb: {xs:'10%', lg: '0'},
          }}
        >
          <img src={Outlook} alt="logo Outlook" className='icono'/>

          <Typography
            sx={{
              textAlign: 'center',
              fontSize: {xs:'15px', lg: '18px'},
              fontFamily: 'Montserrat',
            }}
          >hamerinvestigaciones@hotmail.com</Typography>
        </Box>
      </Grid>
    </>
  )
}
