import { Grid, Typography } from '@mui/material';


export const Contacto = () => {
  return (
    <>
      <Grid
        container
        sx={{
            display: {xs:'flex'},
            justifyContent: {xs:'center', lg: 'start'},
            padding: {xs: '40% 5% 1%', lg: '3% 5%'},
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
            Contacto
        </Typography>
      </Grid>
    </>
  )
}
