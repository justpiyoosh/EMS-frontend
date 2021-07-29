import { createTheme } from '@material-ui/core/styles';
import emsTheme from './emsTheme';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: emsTheme.mainGreen,
            contrastText: emsTheme.white,
        },
        secondary: {
            main: emsTheme.darkBlue,
            contrastText: emsTheme.white,
        },
        background: {
            paper: emsTheme.white,
            default: emsTheme.offWhite,
        },
        error: {
            main: emsTheme.error,
        },
        success: {
            main: emsTheme.mainGreen,
        },
        common: emsTheme,
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontSize: 16,
        h2: {
            fontSize: 32,
            fontWeight: 'bold',
            margin: 0,
            padding: 0,
            color: emsTheme.darkGrey,
        },
        h3: {
            fontSize: 20,
            fontWeight: 'bold',
            margin: 0,
            color: emsTheme.darkGrey,
        },
        h4: {
            fontSize: 16,
            fontWeight: 'bold',
            margin: 0,
            color: emsTheme.darkGrey,
        },
        h5: {
            fontSize: 14,
            fontWeight: 600,
            margin: 0,
            color: emsTheme.black,
        },
    },
});

export default theme;
