import { Box, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Home, LabelImportant, AddIcCall } from '@mui/icons-material';
import Logo from '../../assets/img/logo.png'

export const NavListDrawer = () => {
    return (
      <>
        <Box
          sx={{ 
            width:{xs:'70vw', lg:'30vw'},
            height: '100%',
            backgroundColor: '#EFE7DD',
          }}
        >
          <nav>
            <List
              sx={{
                m: '5%',
                mt: '10%'
              }}
            >
              <ListItem>
                <ListItemIcon><Home/></ListItemIcon>
                <ListItemButton href="#home">Home</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#quienesSomos">Quienes Somos.</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#comoTrabajamos">¿Como trabajamos?</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#servicios">Opciones y Herramientas.</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#contratacion">Contratacion.</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><AddIcCall/></ListItemIcon>
                <ListItemButton href="#contacto">Contacto</ListItemButton>
              </ListItem>
              <Box>
                <img src={Logo} alt="Logo Hamer Investigaciones" className='logo'/>
              </Box>
            </List>
          </nav>
        </Box>
      </>
    )
  }