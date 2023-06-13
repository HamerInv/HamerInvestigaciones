import { Box, Grid, Typography } from '@mui/material';
import Fondo from '../../assets/img/fondoLampara.jpg';
import Logo from '../../assets/img/logo.png';
import WV from '../../assets/img/WV.png'

const styles = {
  fondoStyle: {
      backgroundImage: `url(${Fondo})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      maxWidth: '100vw',
      height: '100%'
  }
};

export const Footer = () => {
    return (
      <div style={styles.fondoStyle}>
        <Grid
        container
          sx={{
            display: 'grid',
            gridTemplateColumns:{xs: '1fr', lg:'60% 40%'},
          }}
        >
          <Box
            sx={{
              width: '80%',
              height: '70%',
              p: '0 5% 2%',
            }}
          >
            <img src={Logo} alt="Logo Hamer Investigaciones" className='logo'/>
          </Box>
          <Box>
            <Typography
              sx={{
                color: 'third.main',
                fontSize: {xs:'1rem', lg:'1.3rem'}, 
                fontFamily: 'Montserrat', 
                p:{xs:'5%', lg: '20% 5% 0'}
              }}
            >
              Descubre la verdad, confía en Hamer Investigaciones. Tu detective privado de confianza.
            </Typography>
            <Box
            sx={{
              textAlign: 'right',
              p: '2%'
            }}
            >
              <a href="https://instagram.com/witis.villar?igshid=MzRlODBiNWFlZA=="><img src={WV} alt="Logo Witis & Villar Designs" className='logo-wv'/></a>
            </Box>
          </Box>
        </Grid>
      </div>
    )
  }