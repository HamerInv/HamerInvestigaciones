import { Box, Grid, Typography } from '@mui/material';
import Foto from '../../../assets/img/foto8.jpg'

export const Herramientas = ({
  titulo = 'Herramientas con las que contamos',
  p = 'Manejamos tecnología de última generación para poder obtener excelentes resultados en cada investigación. Disponemos de celulares, GPS satelitales portátiles para ubicaciones, cámaras HD, cámaras infrarrojas y grabadores ocultos. Con estos implementos y el trabajo de nuestros investigadores, sacamos a la luz todas tus dudas.'
}) => {
  return (
    <>
      <Grid
        container
        sx={{
            display: {xs:'flex'},
            justifyContent: {xs:'center', lg: 'start'},
            padding: {xs: '10% 5% 20%', lg: '3% 5% 5%'},
            textAlign: {xs:'center'},
        }}
      >
        <Typography
          sx={{
              fontFamily: 'Sorts Mill Goudy',
              fontSize: {xs:'40px', lg: '60px'},
              fontWeight: '500',
              color: 'secondary.main',
              marginBottom: {xs: '10%', lg: '4%'}
          }}
        >
            {titulo}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {xs: '1fr', lg: '70% 30%'},
            alignItems: 'center',
            gap: '5%',
          }}
        >
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
          <Box
            sx={{
              width:{xs:'90%', lg:'70%'},
              m:{xs: '5%', lg: '0'}
            }}
          >
            <img src={Foto} alt="Lente de una camara" className='img-servicios'/>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

