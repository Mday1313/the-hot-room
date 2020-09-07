import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

class Home extends React.Component {
    // 
    static async getInitialProps() {
        let userData;
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            userData = response.data;
            console.log(userData)
        } catch {
            console.log('error')
        }


        return {
            user: {
                name: 'Mel',
                lastname: 'Day'
            }
           
        }
    }
    


    render(){
      
        return(
            <Layout>
               
            </Layout>
        )
    }
}    

export default Home;