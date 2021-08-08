import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(4),
        padding: theme.spacing(2),
        position: 'sticky',
        top: '85px',
    },
    coverPic: {
        position: "absolute",
        inset: "0",
        backgroundColor: "#e5e5e5",
        height: "80px",
        width: "100%",
    },
    active: {
        transform: "translateX(-10px)"
    },
    userName: {
        textDecoration: "none",
        color: "#333",
        "&:hover": {
            textDecoration: "underline",
        }
    },
    activeBtn: {
        color: "green",
        fontSize: 11
    },
    activeTxt: {
        fontSize: 14,
        marginLeft: 5
    },
    CardHeader: {
        flexDirection: "column",
        textAlign: "center",
        "& .MuiAvatar-root": {
            width: "70px",
            height: "70px",
            border: "2px solid white",
            margin: "20px 0",
        }
    }
}));

export default useStyles;
