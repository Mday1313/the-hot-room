import React, { Component } from 'react';
import Layout from '../../components/Layout'
import Profile from './profile';

class Users extends Component {
    render(){
        return(
            <>
                <Layout>
                    <Profile/>
                </Layout>
            </>
        )
    }
}

export default Users;