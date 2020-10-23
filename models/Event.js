const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        default: 'TBD'
    },
    location: {
        type: String,
        default: 'The Hot Room Yoga & Wellness'
    },
    price: {
        type: String
    },
    status: {
        type: String,
    }

});

module.exports = Event = mongoose.model('event', EventSchema);