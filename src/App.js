
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/navbar/Navbar';
import Banner from './components/pages/homepage/Banner';
import Homepage from './components/pages/homepage/Homepage'
import { CssBaseline } from '@material-ui/core';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif'
      ].join(',')
    }
  })
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Homepage />
      </ThemeProvider>     
    </>
  );
}

export default App;
