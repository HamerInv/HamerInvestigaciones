import { Box, Grid, Typography } from '@mui/material';
import Foto from '../../../assets/foto4.jpg';

export const CT = () => {
  return (
    <>
      <Grid
        id='comoTrabajar'
        container
        sx={{
            padding: {xs: '0 5%', lg: '0 5%'},
            display: 'grid',
            gridTemplateColumns: {xs: '1fr', lg: '50% 50%'},
            gap: '5%'
        }}
      >
        <Box>
            <Typography
              sx={{
                  fontFamily: 'Sorts Mill Goudy',
                  fontSize: {xs:'40px', lg: '60px'},
                  fontWeight: '500',
                  color: 'secondary.main',
                  padding: {xs: '10%', lg: '6%'}
              }}
            >
                ¿Cómo trabajamos?
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontSize: {xs:'18px'},
                    fontFamily: 'Montserrat',
                    color: 'fourth.main'
                }}
            > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus deserunt cumque eos expedita. Inventore assumenda dolores aliquid alias quibusdam sapiente provident ex aperiam! Tempore magnam enim esse debitis adipisci. Dolorem. 
            </Typography>
        </Box>
        <Box
            sx={{
                width: '70%',
                height: '60%',
            }}
        >
            <img src={Foto} alt="Foto detective" className='img-body'/>
        </Box>
      </Grid>
    </>
  )
}

