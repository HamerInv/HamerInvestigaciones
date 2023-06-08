import { Box, Grid, Typography } from '@mui/material';

export const ComoTrabajamos = () => {
  return (
    <>
      <Grid
        id='comoTrabajamos'
        container
        sx={{
            display: {xs:'flex'},
            justifyContent: {xs:'center', lg: 'start'},
            padding: {xs: '0 5%', lg: '4% 5%'},
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
            ¿Cómo trabajamos?
        </Typography>
        <Box>
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
      </Grid>
    </>
  )
}

