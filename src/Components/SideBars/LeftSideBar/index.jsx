import React from 'react';
import { Grid, Card, Paper, CardHeader, Avatar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import useStyles from './style';
import { useState } from 'react';

const LeftSideBar = () => {

    const [userName, setUsername] = useState('Piyoosh Singh')
    const classes = useStyles();
    return (
        <Card component={Paper} className={classes.root} >
            <Grid className={classes.coverPic}></Grid>
            <CardHeader
                className={classes.CardHeader}
                avatar={
                    <Avatar
                        src={`images/avatar-${Math.round(Math.random() * 8)}.jpg`}>
                    </Avatar>
                }
                title={
                    <NavLink to={`/username=${userName}`}
                    className={classes.userName}
                    activeClassName={classes.activeUsername}>
                        {userName}
                    </NavLink>
                }
                subheader={
                    <div>
                        <Typography variant="p">Software Engineer</Typography>

                        <Grid className={classes.active}>
                            <FiberManualRecordIcon className={classes.activeBtn} />
                            <span className={classes.activeTxt}>active</span>
                        </Grid>
                    </div>
                }
            />
        </Card>
    )
}

export default LeftSideBar;