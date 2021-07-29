import React from 'react';
import { Grid, Card, Paper } from '@material-ui/core';
import useStyles from './style';

const RightSideBar = () => {

    const classes = useStyles();
    return (
        <Card component={Paper} className={classes.root} >
            <Grid>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non excepturi suscipit
                labore fuga mollitia rerum quia adipisci
                deleniti, numquam in amet iure laudantium
                doloribus commodi molestias error maiores
                nihil repudiandae!
            </Grid>
        </Card>
    )
}

export default RightSideBar;