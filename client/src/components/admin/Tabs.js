import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ProfileForm from '../admin/ProfileForm';
import MemberList from '../admin/MemberList';
import VideoList from '../admin/VideoList';
import AdminPanel from './AdminPanel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 224,
    // paddingBottom: theme.spacing(4),
    padding: theme.spacing(2)
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(8),
    
  },
  tab: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    verticalAlign: 'middle'
  },
  tabPanel: {
    width: '100%',
    padding: theme.spacing(3)
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab className={classes.tab} label="My Profile" {...a11yProps(0)} />
        <Tab className={classes.tab} label="Members" {...a11yProps(1)} />
        <Tab className={classes.tab} label="Media" {...a11yProps(2)} />
        <Tab className={classes.tab} label="Admin Panel" {...a11yProps(3)} />
      </Tabs>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <ProfileForm />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <MemberList />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <VideoList />
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        <AdminPanel />
      </TabPanel>
      
    </div>
  );
}