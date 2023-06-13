import { Box, Grid, Typography } from '@mui/material';


export const QuienesSomos = ({
  titulo = 'Quienes Somos',
  p = 'HAMER INVESTIGACIONES es una empresa argentina especializada en investigaciones y seguimientos, se destaca en casos de infidelidades y localización de personas. Garantizamos un servicio profesional, preciso y discreto, utilizando técnicas vanguardistas y recursos avanzados. Nuestro compromiso es brindar resultados confiables y confidenciales, cumpliendo las expectativas de nuestros clientes. Confíe en nuestro equipo de expertos para resolver sus inquietudes de manera eficiente.'
}) => {
  return (
    <>
      <Grid
        id='quienesSomos'
        container
        sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: {xs: '20% 5% 10%', lg: '7% 5% 2%'}
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
        >{titulo}</Typography>
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
