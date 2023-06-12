import { Box, Grid, Typography } from '@mui/material';
import Foto4 from '../../../assets/img/foto4.jpg';
import Foto5 from '../../../assets/img/foto5.jpg';
import Foto6 from '../../../assets/img/foto6.jpg';
import Foto7 from '../../../assets/img/foto7.jpg';

export const Servivios = () => {
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
          <Box
            sx={{
              border: 'solid 3px #000',
              borderRadius: '5px'
            }}
          >
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
            >Seguimiento</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem iste facilis perspiciatis nihil. Error doloribus at itaque.</Typography>
          </Box>

          <Box
            sx={{
              border: 'solid 3px #000',
              borderRadius: '5px'
            }}
          >
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
            >Informes Personales</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem iste facilis perspiciatis nihil. Error doloribus at itaque.</Typography>
          </Box>

          <Box
            sx={{
              border: 'solid 3px #000',
              borderRadius: '5px',
            }}
          >
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
            >Informes Telefónicos</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem iste facilis perspiciatis nihil. Error doloribus at itaque.</Typography>
          </Box>

          <Box
            sx={{
              border: 'solid 3px #000',
              borderRadius: '5px'
            }}
          >
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
            >Informes Laborales</Typography>
            <Typography
              sx={{
                color:'fourth.main',
                fontFamily: 'Montserrat',
              }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem iste facilis perspiciatis nihil. Error doloribus at itaque.</Typography>
          </Box>
        </Box>
    </>
  )
}
