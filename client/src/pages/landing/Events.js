import React from 'react';
import SmallHero from '../../components/layout/SmallHero';
import img from '../../resources/images/eventsHero.jpg';
import FullEvent from '../../components/common/FullEvent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const events = [
    {
        id: 1,
        name: 'Name',
        location: 'Place, Place',
        instructor: 'Instructor',
        date: 'Month, 11, year',
        time: '3pm',
        url: '',
        image: 'https://theknow.denverpost.com/wp-content/uploads/2020/04/GettyImages-1152829238.jpg'
    },
    {
        id: 2,
        name: 'Name',
        location: 'Place, Place',
        instructor: 'Instructor',
        date: 'Month, 11, year',
        time: 'time',
        url: '',
        image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0OTE4ODAzMDQwMzE0Njg1/yoga-gettyimages-1142820079-promo.jpg'
    },
    {
        id: 3,
        name: 'Name',
        location: 'Place, Place',
        instructor: 'Instructor',
        date: 'Month, 11, year',
        time: 'time',
        url: '',
        image: 'https://etimg.etb2bimg.com/photo/75822133.cms'
    },
]

const Events = () => {
    
    return (
        <div>
            {/* if no events, display no events at this time, new events coming soon */}
            <SmallHero img={img} alt="Events Hero" title="Upcoming Events"/>

            <Grid container xs={12}>
                {events.map((event) => (
                    <Grid item xs={12} lg={4} key={event.id}>
                        <FullEvent event={event}/>
                    </Grid>
                    
                ))}
            </Grid>
           

        </div>
    )
}

export default Events;