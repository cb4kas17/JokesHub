const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/signup', async (req, res) => {
    try {
        let user = new User({
            userName: req.body.username,
            passWord: req.body.password,
            fullName: req.body.name,
        });

        const userNameChecker = await User.findOne({ userName: req.body.username });
        if (userNameChecker) {
            res.send('username exists');
        } else {
            await user.save();
            res.json({
                success: true,
                user: user,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ userName: req.body.username });
        console.log(userData);
        if (!userData) {
            res.send('No username found');
        } else {
            if (userData.userName === req.body.username && userData.passWord === req.body.password) {
                const accessToken = jwt.sign({ id: userData._id, username: userData.userName, name: userData.fullName }, 'secretKey', { expiresIn: '15m' });
                res.cookie('token', accessToken, { httpOnly: true, secure: true, sameSite: 'none' });
                res.json({
                    success: true,
                    accessToken,
                });
            } else {
                res.send('incorrect password');
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});

module.exports = router;
