const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
const Profile = require('../../models/Profile');

//  @route GET api/profile/me
//  @desc  Get current users profile
//  @acces Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//  @route POST api/profile
//  @desc  Create or update user profile
//  @acces Private

router.post('/', [auth, [
    check('status', 'Status is requires').not().isEmpty(),
]],
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { 
        status,
        bio,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
    } = req.body;

    // Build profile object
    const profileFields = {};

    profileFields.user = req.user.id;

    if(status) profileFields.status = status;
    if(bio) profileFields.bio = bio;

    profileFields.social = {}
    if(youtube) profileFields.social.youtube = youtube;
    if(twitter) profileFields.social.twitter = twitter;
    if(instagram) profileFields.social.instagram = instagram;
    if(linkedin) profileFields.social.linkedin = linkedin;
    if(facebook) profileFields.social.facebook = facebook;
    
    try {
        let profile = await Profile.findOne({ user: req.user.id });
// Update
        if(profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile);
        }
        // Create
        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

//  @route GET api/profile
//  @desc  get all Profiles
//  @acces Public

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch(err) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//  @route GET api/profile/user/:user_id
//  @desc  get  Profile by id
//  @acces Public

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if(!profile) {
            return res.status(400).json({ msg: 'Profile not found'})
        }
        res.json(profile);
    } catch(err) {
        console.error(error.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg: 'Profile not found'})
        }
        res.status(500).send('Server Error');
    }
})

//  @route DELETE api/profile
//  @desc  delete profile, user and post
//  @acces Private

router.delete('/', auth, async (req, res) => {
    try {
        // @todo Remove users posts

        // remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // remove user
        await User.findOneAndRemove({ _id: req.user.id });
        res.json({ msg: 'User has been deleted'});
    } catch(err) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

//  @route PUT api/profile/experience
//  @desc  Add profile experience
//  @acces Private

router.put('/experience', [auth, [
    check('title', 'Title is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {
        title,
        education,
        description,
        year
    } = req.body;

    const newExp = {
        title,
        education,
        description,
        year
    }

    try {
        const profile = await Profile.findOne({ user: req.user.id });

        profile.experience.unshift(newExp);

        await profile.save();
        res.json(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//  @route Delete api/profile/experience/:exp_id
//  @desc  Delete profile experience
//  @acces Private

router.delete('/experience/:exp_id', auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id });
        // get remove index
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);

        profile.experience.splice(removeIndex, 1);
        await profile.save();
        
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;