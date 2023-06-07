import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { generalTheme } from './generalTheme';

export const Theme = ({ children }) => {
    return (    
      <ThemeProvider theme={ generalTheme }>
  
          <CssBaseline/>
  
          {children}
  
      </ThemeProvider>
    )
  }
