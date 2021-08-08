import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(4),
        padding: theme.spacing(2),
        position: 'sticky',
        top: '85px',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    activeBtn: {
        color: theme.palette.primary.main,
        fontSize: 11,
    },
    notActive: {
        color: theme.palette.secondary.main,
        fontSize: 11,
    },
    listItemIcon: {
        minWidth: 30
    }
}));

export default useStyles;
