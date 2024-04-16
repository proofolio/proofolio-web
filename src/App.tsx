import * as React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { ThemeProvider, createTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Done } from '@mui/icons-material';


export default function App() {

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  //  const theme = React.useMemo(
  //     () =>
  //       createTheme({
  //         palette: {
  //           mode: prefersDarkMode ? 'dark' : 'light',
  //         },
  //       }),
  //     [prefersDarkMode],
  //   );


  return (
    // <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage/>

      </div>

    // </ThemeProvider>
  );
}


