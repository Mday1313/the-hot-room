import React from 'react';
import { scroller } from "react-scroll";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500, 
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }
    return (
       <Drawer
           anchor="right"
           open={props.open}
           onClose={()=> props.onClose(false)}
        >
           
            <List copmonent="nav">
                <ListItem button onClick={() => scrollToElement("team")}>
                    Team
                </ListItem>
                <ListItem button onClick={() => scrollToElement("classes")}>
                    Classes
                </ListItem>
                <ListItem button onClick={() => scrollToElement("events")}>
                    Events
                </ListItem>
                <ListItem button onClick={() => scrollToElement("pricing")}>
                    Prices
                </ListItem>
                <ListItem button onClick={() => scrollToElement("book")}>
                    Book Now
                </ListItem>
            </List>
           
           
            
       </Drawer>
    );
};

export default SideDrawer;