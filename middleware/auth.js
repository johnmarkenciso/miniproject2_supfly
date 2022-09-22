const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.cookies['auth-token'];
    if (!token) return res.redirect('/login');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.redirect('/?error=' + encodeURIComponent('Invalid Token'));
    }
}