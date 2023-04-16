const crypto = require('crypto');
const environments = require('./environments');
const utilities = {};

//parse json string to object
utilities.parseJSON = (jsonString) => {
    let output;
    try{
        output = JSON.parse(jsonString);
    }catch{
        output = {};
    }
    return output;
}

//hashing the string 
utilities.hash = (string) => {
    if(typeof(string) === 'string' && string.length > 0){
        let hash = crypto
        .createHmac('sha256',environments.secretKey)
        .update(string)
        .digest('hex');
        return hash;
    }
    return false;
    
}
//export module
module.exports = utilities;