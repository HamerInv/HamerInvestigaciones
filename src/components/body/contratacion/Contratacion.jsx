import { Box, Grid, Typography } from '@mui/material';

export const Contratacion = ({
  titulo = 'Contratación del servicio',
  p = 'Los presupuestos se enviarán en el día. Se requiere un pago inicial del 50% al contratar, y el resto se abona a la entrega del trabajo finalizado. Si se encuentra en otra provincia o país limítrofe, proporcionaremos nuestra cuenta bancaria para realizar el depósito correspondiente al presupuesto. Los resultados de nuestro trabajo se entregarán en CD, pen drive o por correo electrónico, según las preferencias del cliente.'
}) => {
  return (
    <>
      <Grid
        id='contratacion'
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: {xs:'center'},
          padding: {xs: '7% 5%', lg: '4% 5%'},
        }}
      >
        <Typography
          sx={{
              fontFamily: 'Sorts Mill Goudy',
              fontSize: {xs:'40px', lg: '60px'},
              fontWeight: '500',
              color: 'primary.main',
              marginBottom: {xs: '10%', lg: '4%'}
          }}
        >
            {titulo}
        </Typography>
        <Box>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: {xs:'18px'},
                    fontFamily: 'Montserrat',
                    color: 'fourth.main'
                }}
            > 
            {p} 
            </Typography>
        </Box>
      </Grid>
    </>
  )
}
