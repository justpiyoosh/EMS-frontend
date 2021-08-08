import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router';
import theme from './Config/Theme';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if (Cookies.get('Token') === undefined)
      Cookies.set('Token', 'null')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
