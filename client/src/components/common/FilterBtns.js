import React from 'react';
import {
    Route,
    NavLink,
    Redirect
  } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3)
    },
    card: {
        padding: theme.spacing(1),
        margin: theme.spacing(2)
    }, 
    members: {
        margin: theme.spacing(2)
    }
}))


const FilterBtns = (props) => {
    const classes = useStyles();
    const filters = props.filters;

    return (
        <ul className="course-nav">
            {filters.map((filter) => (
                <li key={filter.id}><NavLink to={`/${filter.url}`}>{filter.title}</NavLink></li>
            ))}
        
        </ul>
      
    )
}

export default FilterBtns;