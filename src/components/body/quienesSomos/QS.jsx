import { Box, Grid, Typography } from "@mui/material"


export const QS = () => {
  return (
    <>
      <Grid
        id='quienesSomos'
        container
        sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: {xs: '20% 5%', lg: '10% 5%'}
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
        > Quienes Somos </Typography>
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
