import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    Container: {
        width: '120vw',
        marginLeft: 50
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: '2px 2px 5px #00000020',
        borderRadius: 5
    },
    title: {
        margin: theme.spacing(2, 4, 2),
    },
    link: {
        color: theme.palette.link.main
    },
    loader: {
        textAlign: 'center',
        position: 'fixed',
        inset: "50%",
    },
    item: {
        borderBottom: '1px solid #e5e5e5',
    }
}));

export default useStyles;
