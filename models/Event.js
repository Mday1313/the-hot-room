const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    date: {
        type: Date
    },
    time: {

    },
    instructor: {

    },
    location: {
        type: String,
        // make default the studio
    }

});

module.exports = Event = mongoose.model('event', EventSchema);