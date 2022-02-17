const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Jokes = require('../models/jokes');

const isAuth = require('../middleware/is-auth');

router.get('/allJokes', async (req, res) => {
    try {
        const jokes = await Jokes.find();
        console.log(jokes);
        res.json({
            success: true,
            jokes: jokes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

router.post('/createJokes', async (req, res) => {
    try {
        let joke = new Jokes({
            author: 'Chy',
            content: req.body.content,
        });
        await joke.save();
        res.json({
            success: true,
            joke: joke,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

router.get('/allJokes/:id', async (req, res) => {
    try {
        const joke = await Jokes.findById(req.params.id);
        console.log(joke);
        res.json({
            success: true,
            joke: joke,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});
module.exports = router;
