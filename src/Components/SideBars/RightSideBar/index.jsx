import React from 'react';
import { Card, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import useStyles from './style';

const RightSideBar = () => {
    const initialOpen = {
        followings: false,
        followers: false,
    }
    const [open, setOpen] = React.useState(initialOpen);

    const classes = useStyles();
    return (
        <Card component={Paper} className={classes.root} >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItem>
                    <ListItemText secondary="Followings"  />
                </ListItem>
                <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem className={classes.nested}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordIcon className={classes.activeBtn} />
                            </ListItemIcon>
                            <ListItemText secondary="Saurav Pandey" />
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordIcon className={classes.notActive} />
                            </ListItemIcon>
                            <ListItemText secondary="Shivanshu Srivastava" />
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordIcon className={classes.notActive} />
                            </ListItemIcon>
                            <ListItemText secondary="Shivam Verma" />
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordIcon className={classes.notActive} />
                            </ListItemIcon>
                            <ListItemText secondary="Pawan" />
                        </ListItem>
                        <ListItem className={classes.nested}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordIcon className={classes.notActive} />
                            </ListItemIcon>
                            <ListItemText secondary="Risabh" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon className={classes.listItemIcon}>
                                <FiberManualRecordIcon className={classes.notActive} />
                            </ListItemIcon>
                            <ListItemText secondary="Saurabh Maurya" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>

        </Card>
    )
}

export default RightSideBar;