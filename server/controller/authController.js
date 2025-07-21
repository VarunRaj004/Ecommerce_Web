const User = require('../models/User');

exports.login = async (req, res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user || user.password !== password)
        return res.status(401).send({error:'Invalid Credentials'});

    res.send({message:'Login Successful'})

}