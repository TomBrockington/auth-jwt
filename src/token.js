const jwt = require("jsonwebtoken");
// takes params of payload and secret key, could add header data
function createToken(payload, secret) {
    return jwt.sign(payload, secret);
}
console.log(createToken({ user: 'tom', id:42 }, 'secretkey'));
// this returns eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidG9tIiwiaWQiOjQyLCJpYXQiOjE2NjI2NjcxMjV9.A-iX4EwZHxQbgzfStQeo5tHgSqOWI9DwvOQ_KBoyJAM



function createTokenWithExpiry(payload, secret, expiryTime) {
  return jwt.sign(payload, secret, { expiresIn: expiryTime})
}
console.log(createTokenWithExpiry({user: 'tom', id: 42 }, 'secretkey', '24h'));
// returns eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidG9tIiwiaWQiOjQyLCJpYXQiOjE2NjI2Njc1MzAsImV4cCI6MTY2Mjc1MzkzMH0.v5eVoEp9oSNSdmXc_vWqeH5t7OpriKnqOP4qTkQLERg


function verifyToken(token, secretkey) {
  try {
    return jwt.verify(token, secretkey)
  } catch (error) {
    return false
  }
}
const token = createTokenWithExpiry({user: 'tom', id: 42 }, 'secretkey', '24h')
console.log(token);

console.log(verifyToken(token, 'secretkey'));
console.log(verifyToken(token, 'somethingelse'));

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
