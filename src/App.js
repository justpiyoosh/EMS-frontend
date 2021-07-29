import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router';
import theme from './Config/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
