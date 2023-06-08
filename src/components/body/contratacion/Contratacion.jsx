import { Box, Grid, Typography } from '@mui/material';

export const Contratacion = () => {
  return (
    <>
      <Grid
        id='contratacion'
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: {xs:'center'},
          padding: {xs: '7% 5%', lg: '4% 5% 2%'},
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
            Contratación del servicio
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
