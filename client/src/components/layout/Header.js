import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CallIcon from '@material-ui/icons/Call';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";

import Menu from '@material-ui/core/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
// import SideDrawer from "./SideDrawer";
import logo from '../../resources/images/logo_flame.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { MenuItem } from '@material-ui/core';


class Header extends Component {
  
    state= {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);

    }
    
    handleScroll =()=> {
        if(window.scrollY>10){
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    render() {
       
        return (
           <AppBar
            position="fixed"
            style={{
                backgroundColor: this.state.headerShow ? "#424242" : "transparent",
                boxShadow: "none",
                padding: "10px 0px",
           
            }}
           >
            <ToolBar>
            <div style={{
                 padding: '16px',
                 display: 'flex',
                 justifyContent: 'center',
                 alignContent: 'center',
                 width: '100vw'

            }} >
                <Typography variant="body1" spacing={3} color="secondary" >
                    <CallIcon />
                    Call us: 615-457-3075
                </Typography>
                <div style={{
                    paddingRight: '60px',
                    paddingLeft: '60px',
                    textAlign: 'center',
                    display: this.state.headerShow ? "flex" : "block",
                }}>
                    <img style={{
                      marginBottom: '10px'
                    }} src={logo} alt="the hot room" width="25px"/>
                    <Typography variant="h4" color="inherit" component={Link} to="/" align="center" style={{
                        display: 'block',
                        textDecoration: 'none',
                        fontWeight: 700,
                        marginTop: this.state.headerShow ? 'auto' : '',
                        padding: this.state.headerShow ? 'inherit' : ''
                    }}>
                    the hot room
                    </Typography>
                    <div style={{
                        cursor: 'pointer',
                        fontWeight: 400,
                        paddingTop: '10px',
                        paddingLeft: this.state.headerShow ? '20px' : '0'
                    }}>
                        <Typography variant="h6" style={{textDecoration: "none", marginLeft: this.state.headerShow ? '0' : '20px'}} color="inherit" component={Link} to="/team" align="center" >Team</Typography>
                        <Typography style={{marginLeft: "20px", textDecoration: "none"}} color="inherit" variant="h6" component={Link} to="/classes" align="center" >Classes</Typography>
                        <Typography style={{marginLeft: "20px", textDecoration: "none"}} color="inherit" variant="h6" component={Link} to="/events" align="center" >Events</Typography>
                        <Typography style={{marginLeft: "20px", textDecoration: "none"}} color="inherit" variant="h6" component={Link} to="/pricing" align="center" >Prices</Typography>
                        <Button style={{marginLeft: "20px"}}variant="contained" color="secondary">Book Now</Button>
                    </div>
                </div>
                <div style={{
                    //  width: '300px',
                     textAlign: 'right',
                     color: '#fff'
                }}>
                    <IconButton href="https://www.facebook.com/TheHotRoomTN/" color="inherit">
                        <FacebookIcon fontSize="large"   />
                    </IconButton>
                    
                    <IconButton href="https://www.instagram.com/thehotroomtn/" color="inherit">
                        <InstagramIcon fontSize="large"   />
                    </IconButton>

                </div>
             
            </div>
            {/* <IconButton
                    aria-label="Menu"
                    color="inherit"
                    onClick={()=> this.toggleDrawer(true)}
                >
                    <MenuIcon/>
                </IconButton> */}

                {/* <SideDrawer 
                    open={this.state.drawerOpen}
                    onClose={(value)=> this.toggleDrawer(value)}
                /> */}

            </ToolBar>

           </AppBar>
        );
    }
}

export default Header;