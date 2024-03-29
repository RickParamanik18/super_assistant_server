const users = require("../models/user.model");

const login = async (params) => {
    const result = await users.findOne({ email: params.email });
    
    if (result && result.password === params.password) return result;
    else return null;
};
const signin = async (params) => {
    let result = await users.findOne({ email: params.email });
    if (result) return null;
    const newUser = new users({
        name: params.name,
        email: params.email,
        password: params.password,
        forms: params.forms,
    });

    result = await newUser.save();
    return result;
};

module.exports = {
    login,
    signin,
};
