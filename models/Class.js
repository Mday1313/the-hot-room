const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    
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
    }
});

module.exports = Class = mongoose.model('class', ClassSchema);