import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Tabs,
    Tab,
    Typography,
    Grid,
    Box
} from '@material-ui/core';
import { 
    EventForm, 
    ClassesForm,
    ReviewsForm
} from './AdminForms';
import ClassDescription from '../layout/ClassDescription';




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
          <Grid container item xs={12} justify="space-between">
                <Grid item xs={12}>
                    <Typography variant="h5" align="left" component="h1">Admin Panel</Typography>
                </Grid>
            </Grid>
          <Tabs value={value} centered indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Events" {...a11yProps(0)} />
            <Tab label="Classes" {...a11yProps(1)} />
            <Tab label="Reviews" {...a11yProps(2)} />
            <Tab label="Instructors" {...a11yProps(3)} />
            {/* <Tab label="Prices" {...a11yProps(4)} /> */}
          </Tabs>
       
        <TabPanel value={value} index={0}>
          <EventForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ClassesForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ReviewsForm />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Instructors
        </TabPanel>
        {/* <TabPanel value={value} index={4}>
          Prices
        </TabPanel> */}
      </div>
    );
  }