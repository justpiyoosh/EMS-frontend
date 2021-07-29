import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(4),
        padding: theme.spacing(2),
        position: 'sticky',
        top: '85px',
    },
}));

export default useStyles;
