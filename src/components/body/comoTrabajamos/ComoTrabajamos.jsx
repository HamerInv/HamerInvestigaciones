import { Box, Grid, Typography } from '@mui/material';

export const ComoTrabajamos = ({
  titulo = '¿Cómo trabajamos?',
  p = 'Somos un equipo de profesionales altamente capacitados que se distingue por su excelencia y compromiso absoluto con la confidencialidad. Contamos con oficinas propias que garantizan una atención de calidad, así como privacidad y seguridad óptimas. Además, ofrecemos consultas gratuitas con nuestros abogados para brindar un servicio integral a nuestros clientes. Estamos disponibles para realizar trabajos en todas las provincias y localidades del pais, así como en países limítrofes. brindando soluciones efectivas a sus necesidades de investigación.'
}) => {
  return (
    <>
      <Grid
        id='comoTrabajamos'
        container
        sx={{
            display: {xs:'flex'},
            justifyContent: {xs:'center', lg: 'start'},
            padding: {xs: '5% 5% 10%', lg: '4% 5%'},
            textAlign: {xs:'center'},
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

