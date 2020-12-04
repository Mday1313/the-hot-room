import React from 'react';
import Grid from '@material-ui/core/Grid';
import ClassDescription from '../../components/layout/ClassDescription';
import SmallHero from '../../components/layout/SmallHero';
import { Typography } from '@material-ui/core';

// ToDo: replace with database call
const items = [
    {
        id: 1,
        name: 'Hot 90, original hot yoga',
        desc: `are you looking for pain relief, peace of mind, or increased flexibility and strength?
        we want that for you too! come exactly as you are and let our carefully trained instructors guide you through this beginners style of yoga that has been transforming lives around the world for decades. the sequence of 26 postures and 2 breathing exercises are systematically designed to open, lengthen, and strengthen both body and mind. this is the original hot yoga.`
    },
    {
        id: 2,
        name: 'Hot 75 and Hot 60',
        desc: `our express classes gives you all 26 postures and 2 breathing exercise that you love from the Hot 90 class, in express formats. designed to help you maintain your practice, these classes move at a little quicker pace, so bring your focused attention to maximize your efforts.`
    },
    {
        id: 3,
        name: 'Progressive 75, warm yoga',
        desc: `go beyond as you flow through the original hot yoga series and build foundations for a variety of postures designed to strengthen, lengthen, and tone your body. challenge yourself as you progress through salutations, hip openers, and arm balances. this class is accessible by everyBODY! the instructor practices along with the class, so it’s best to be familiar (at least 10 classes) with the 26+2 hot yoga series to make the most of the experience.`
    },
    {
        id: 4,
        name: 'Progressive 75, warm yoga',
        desc: `go beyond as you flow through the original hot yoga series and build foundations for a variety of postures designed to strengthen, lengthen, and tone your body. challenge yourself as you progress through salutations, hip openers, and arm balances. this class is accessible by everyBODY! the instructor practices along with the class, so it’s best to be familiar (at least 10 classes) with the 26+2 hot yoga series to make the most of the experience.`
    },
    {
        id: 5,
        name: 'Restore 75, warm yoga',
        desc: `we could all use a 75-minute vacation from the busy-ness of our lives. perfect for beginners and seasoned yogis alike, this warm class set to low lights and a mellow musical backdrop provides fewer postures with longer holds. you will move past the muscles and into the connective tissue, while increasing circulation to the joints and improving flexibility. as you release the physical body, you will experience lessons in receptivity and allowance.`
    },
    {
        id: 6,
        name: 'Inferno 60, Inferno Hot Pilates',
        desc: `high-intensity interval training, with Pilates principles. you will ignite your core, build strength, burn fat, and have fun in this low-impact, high energy class! all fitness levels welcome, and perfect for those recovering from injuries.`
    },
]

const FullClasses = ({...props}) => {

    return (
        <>
            <SmallHero title="Classes Offered"/>
            <div className="container">
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h2" color="textPrimary">some hot, some not...</Typography>
                    <Typography variant="h6" component="h3" color="inherit">classes designed to help you feel your absolute best!</Typography>
                </Grid>
                <Grid container item xs={12} align="center" className="">
                {items.map((value) => (
                     <Grid item xs={12}  key={value.id}>
                        <ClassDescription item={{...value}} />
                    </Grid>
                ))}
              </Grid>
               
            </div>
        </>
       
    )
}

export default FullClasses;