import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '../../components/admin/Tabs';
import MainHeader from '../../components/admin/MainHeader';
import DashHeader from '../../components/admin/DashHeader'

const useStyles = makeStyles((theme) => ({
    containerBox: {
        minHeight: '60vh',
        padding: theme.spacing(4)
    }
}))

const Dashboard = ({ children }) => {
    const classes = useStyles();

    return(
        <>
        <MainHeader />
        <div className="container">
            <Container align="center" className={classes.containerBox}>
                <DashHeader />
                <Tabs />
            </Container>
        </div>
    </>
    )
}

export default Dashboard;