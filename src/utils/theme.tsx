import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f5f5f5', 
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {
          color:'#f5f5f5', // números y botones
        },
        ul: {
          '& .MuiPaginationItem-root': {
            color:'#f5f5f5',// números
          },
        },
      },
    },
  },
});

export default theme;