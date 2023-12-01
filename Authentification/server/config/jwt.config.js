// Creating a middleware for authentication
const jwt = require('jsonwebtoken'),
    secret = "thisascretkey..shhhh";

module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {

    console.log(`UserToken: ${req.cookies.userToken}`);

    console.log(req.cookies)
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {

        if (err) {
            console.log("This is err:", err);
            res.status(401).json({ verified: false });
        }
        else {
            console.log("SUCCESS")
            next();
        }
    });
}