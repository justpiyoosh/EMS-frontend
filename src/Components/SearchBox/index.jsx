/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
    searchField: {
        marginRight: 40,
        width: 200
    },

});

export default function SelectBox() {

    const [value, setValue] = useState('');

    const classes = useStyles();
    const history = useHistory();

    const handleInputChange = (e) =>{
        setValue(e.target.value);
    }

    const handleSearch = () =>{
        history.push(`./search-research=${value}`)
    }

    return (
        <TextField
            className={classes.searchField}
            size="small"
            label={<span>Search</span>}
            variant="outlined"
            value={value}
            onChange={handleInputChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton color="primary" component="span">
                            <SearchIcon onClick={handleSearch}/>
                        </IconButton>
                    </InputAdornment>
                )
            }}

        />
    );
}
