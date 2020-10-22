// for Admin location etc

const mongoose = require('mongoose');

const StudioInfoSchema = new mongoose.Schema({
   
    location: [
        {
            address1: {
                type: String
            },
            address2: {
                type: String
            },
            city: {
                type: String
            },
            state: {
                type: String,
            },
            zipCode: {
                type: String,
            },
           
        }
    ],
    contact: {
        email: {
            type: String
        },
        website: {
            type: String
        },
        phone: {
            type: String
        },
       
    },
    hours: [
        {
            day: {
                type: String
            },
            open: {
                type: String
            },
            close: {
                type: String
            },
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        linkedin: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    about: {
        type: String,
    },
  
});

module.exports = StudioInfo = mongoose.model('studioInfo', StudioInfoSchema);