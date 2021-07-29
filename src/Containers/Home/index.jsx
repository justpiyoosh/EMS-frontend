import React from 'react';
import { Grid } from '@material-ui/core';
import NavigationBar from '../../Components/NavigationBar';
import useStyles from './style';
import FeedCard from '../../Components/FeedCard';
import LeftSideBar from '../../Components/SideBars/LeftSideBar';
import RightSideBar from '../../Components/SideBars/RightSideBar';

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavigationBar />

            <Grid
                justifyContent="center"
                container
                spacing={2}
            >
                <Grid item xs={3}>
                    <LeftSideBar />
                </Grid>
                <Grid item xs={6}>
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </Grid>
                <Grid item xs={3}>
                    <RightSideBar />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;