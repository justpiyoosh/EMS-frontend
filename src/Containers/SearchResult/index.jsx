import { Grid, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import useStyles from './style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Loader from '../../Components/Loader';
import AddIcon from '@material-ui/icons/Add';

const SearchResult = ({ match }) => {
    const { searchVal } = match.params;
    const [val, setVal] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const classes = useStyles();

    useEffect(() => {
       setLoading(true)
        fetch(`http://localhost:8000/api/account/users/fetch_all_usernames/${searchVal}`)
            .then(response => response.text())
            .then(result => {
                const res =JSON.parse(result);
                console.log(res)
                setVal(res.names);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(true);
                setVal([]);
            });
    }, []);

    if (isLoading) return <Grid className={classes.loader}><Loader /></Grid>

    return (
        <Grid>
            <Typography variant="h6" className={classes.title}>Search Result for : "{searchVal}"</Typography>
            <Box className={classes.Container}>
                <div className={classes.root}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.demo}>
                            <List>
                                {val.map((item) => {
                                    return (
                                        <ListItem className={classes.item}>
                                            <ListItemAvatar>
                                                <Avatar src={`images/avatar-${item[1]}.jpg`}>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item[0]}
                                                // secondary='Secondary text'
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" className={classes.link} aria-label="delete" size="small">
                                                    follow <AddIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>
                    </Grid>
                </div>
            </Box>
        </Grid>
    )
}

export default SearchResult;