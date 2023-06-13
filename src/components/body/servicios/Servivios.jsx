import { Box, Grid, Typography } from '@mui/material';
import Foto4 from '../../../assets/img/foto4.jpg';
import Foto5 from '../../../assets/img/foto5.jpg';
import Foto6 from '../../../assets/img/foto6.jpg';
import Foto7 from '../../../assets/img/foto7.jpg';

export const Servivios = ({
  titulo1 = 'INFIDELIDADES',
  p1 = 'Nos especializamos en parejas, gracias a nuestra experiencia tenemos la posibilidad de resolver su caso dentro de las 48 hs con una eficacia del 100%.',
  titulo2 = 'LICENCIAS FINGIDAS',
  p2 = 'Apuntamos a demostrar la veracidad o no de las “enfermedades" que causan que los empleados no se presenten en sus trabajos aún sabiendo las consecuencias de ello.',
  titulo3 = 'LISTADOS TELEFÓNICOS',
  p3 = 'Brindamos toda la información necesaria para aclarar sus dudas.',
  titulo4 = 'PARADEROS',
  p4 = 'Mantenemos bases de datos actualizadas para poder encontrar familiares o personas desaparecidas en cualquier punto del país.'
}) => {
  return (
    <>
      <Grid
        id='servicios'
        container
        sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: {xs:'center'},
            padding: {xs: '10% 5% 0', lg: '4% 5% 0'}
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
            Nuestros Servicios 
        </Typography>
      </Grid>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns:{xs: '1fr', lg:'1fr 1fr 1fr 1fr'},
            gap:{xs:'1%', lg:'3%'},
            rowGap:'6%',
            p: {xs:'5% 5% 45%', lg:' 0 5% 7%'}
          }}
        >
          <Box>
            <img src={Foto5} alt="Seguimiento" className='img-servicios'/>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'secondary.main',
                fontSize: {xs:'1.8rem', lg:'1.6rem'},
                fontWeight: '500',
                textTransform: 'uppercase', 
                fontFamily: 'Montserrat',

              }}
            >{titulo1}</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >{p1}</Typography>
          </Box>

          <Box>
            <img src={Foto6} alt="Informes Personales" className='img-servicios'/>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'secondary.main',
                fontSize: {xs:'1.8rem', lg:'1.6rem'}, 
                fontWeight: '500',
                textTransform: 'uppercase', 
                fontFamily: 'Montserrat',

              }}
            >{titulo2}</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >{p2}</Typography>
          </Box>

          <Box>
            <img src={Foto4} alt="Informes Telefónicos" className='img-servicios'/>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'secondary.main',
                fontSize: {xs:'1.8rem', lg:'1.6rem'}, 
                fontWeight: '500',
                textTransform: 'uppercase', 
                fontFamily: 'Montserrat',

              }}
            >{titulo3}</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >{p3}</Typography>
          </Box>

          <Box>
            <img src={Foto7} alt="Informes Laborales" className='img-servicios'/>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'secondary.main',
                fontSize: {xs:'1.8rem', lg:'1.6rem'},  
                fontWeight: '500',
                textTransform: 'uppercase', 
                fontFamily: 'Montserrat',

              }}
            >{titulo4}</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >{p4}</Typography>
          </Box>
        </Box>
    </>
  )
}
