const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Event = require('../../models/Event');

//  @route POST api/events
//  @desc Create an event
//  @acces Private

router.post('/', [ auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('time', 'Time is required').not().isEmpty()
]], 
async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, image, date, time, instructor, location, price, status } = req.body;

        try {
            const user = await User.findById(req.user.id).select('-password');

            if(!user.isAdmin) {
                return res.status(401).status({ msg: 'User not authorized' });
            }
        
            event = new Event({
                name, 
                description, 
                image, 
                date, 
                time, 
                instructor, 
                location, 
                price, 
                status
            })

            await event.save();

            res.json(event);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
        
    }
);

//  @route GET api/events
//  @desc Get all events
//  @acces Public

router.get('/', async (req, res) => {
    try {
        const events = await Event.find({ date: {
            $gte: new Date()
        }}).sort({ date: 1 });
       
        res.json(events)
    } catch(err) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//  @route GET api/events/:id
//  @desc Get event by id
//  @acces Public

router.get('/:id', async (req,res) => {
    try {
        const event = await Event.findById(req.params.id);

        if(!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }
        res.json(event)
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.status(500).send('Server Error');
    }
})

//  @route DELETE api/events/:id
//  @desc Delete a event
//  @acces Private

router.delete('/:id', auth, async (req,res) => {
    try {
        const event = await Event.findById(req.params.id);

        const user = await User.findById(req.user.id).select('-password');

        if(!user.isAdmin) {
            return res.status(401).status({ msg: 'User not authorized' });
        }

        await event.remove();

        res.json({ msg: 'Event removed' });
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Event not found' });
        }
        res.status(500).send('Server Error');
    }
});

//  @route POST api/events/:id
//  @desc Edit an event
//  @acces Private
router.post('/:id', [ auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('time', 'Time is required').not().isEmpty()
]], 
async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, image, date, time, instructor, location, price, status } = req.body;

           // Build event object
        const eventFields = {};

        if(name) eventFields.name = name;
        if(description) eventFields.description = description;
        if(image) eventFields.image = image;
        if(date) eventFields.date = date;
        if(time) eventFields.time = time;
        if(instructor) eventFields.instructor = instructor;
        if(location) eventFields.location = location;
        if(status) eventFields.status = status;
        if(price) eventFields.price = price;

        try {

            const user = await User.findById(req.user.id).select('-password');
            let event = await Event.findOne({ _id: req.params.id});
            
            if(!user.isAdmin) {
                return res.status(401).status({ msg: 'User not authorized' });
            }

            if(event) {
                
                event = await Event.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: eventFields },
                    { new: true }
                );

                return  res.json(event);
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
        
    }
);



module.exports = router;