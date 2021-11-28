import { createTheme } from '@mui/material/styles/'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#014073',
      light: '#436AA2',
      dark: '#001a47',
      contrastText: '#fff',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: ' #FFFFFF',
        },
      },
    },
  },
})
