import { Box, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Home, LabelImportant, AddIcCall } from '@mui/icons-material';
import Logo from '../../assets/logo.png'

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
                <ListItemButton href="#">Home</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#quienesSomos">Quienes Somos.</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#">¿Como trabajamos?</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#">Servicios y Herramientas.</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><LabelImportant/></ListItemIcon>
                <ListItemButton href="#">Contratacion.</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemIcon><AddIcCall/></ListItemIcon>
                <ListItemButton href="#">Contacto</ListItemButton>
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