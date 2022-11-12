require('dotenv').config();
module.exports = function(){
    if(!process.env.AHMED_jwtPrivateKey) {
        throw new Error('FATAL ERROR : jwtPrivateKey is not defined .' );
    };
} 