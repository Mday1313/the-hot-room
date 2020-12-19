import React from 'react';
import SmallHero from '../../components/layout/SmallHero';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default
    },
    pricing: {
        height: '600px',
      
    }, 
    etiquette: {
     height: '600px',
     background: theme.palette.background.grey
    },
  
}))

const Pricing = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <SmallHero  alt="" title="Pricing & Etiquette"/>
            <Grid container item xs={12} className={classes.pricing}>
                <Grid item xs={12} md={6}>
                    pricing 
                </Grid>
                <Grid item xs={12} md={6}>
                  graphic
                </Grid>
            </Grid>
            <Grid container item  xs={12} className={classes.etiquette}>
                
               etiquette
            </Grid>
           
        </div>
    )
}

export default Pricing;