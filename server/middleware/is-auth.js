const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    console.log(req.cookies.token);
    const token = req.cookies.token;
    console.log(token);

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secretKey');
    } catch (err) {
        err.statusCode = 500;
        console.log('modified or nonexistent token!');
        throw err;
    }
    if (!decodedToken) {
        const error = new Error('not authenticated!');
        console.log('no token!');
        error.statusCode = 401;
        throw error;
    }
    res.locals.id = decodedToken.id; // ALL THESE REACH ROUTES
    res.locals.username = decodedToken.username; // email used for teacherroutes
    res.locals.name = decodedToken.name;
    console.log('user logged in!');
    next();
};
