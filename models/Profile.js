const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    // dropdown Teacher/Student
    status: {
        type: String,
        required: true,
    },
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            education: {
                type: String
            },
            description: {
                type: String
            },
            year: {
                type: Date,
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
    bio: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
  
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);