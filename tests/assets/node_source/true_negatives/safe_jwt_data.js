const config = require('./config')
const { JWT } = require('jose')


function example2(user) {
    // ok
    const token = JWT.sign({ name: user.name }, secret)
    return token;
}

function example3(user) {
    // ok
    const obj = {
        name: user.name
    }
    const token = JWT.sign(obj, secret)
    return token;
}