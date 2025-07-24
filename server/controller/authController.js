const User = require('../models/User');

exports.login = async (req, res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user || user.password !== password)
        return res.status(401).send({error:'Invalid Credentials'});
    
    req.session.userId = user._id;
    console.log(req.session.userId );
    res.send({message:'Login Successful'})

}

exports.register = async (req,res) => {
    const {name,email,password} = req.body;
    const existingUser = await User.findOne({email}) ;
    if(existingUser)
        return res.status(400).send({message:'User Already Exists'});
    const user = User.create({name,email,password});
    res.send({message:"User Registered"});
}

exports.profile = async (req,res) => {
    if(!req.session.userId) return res.status(401).send({message:"Un Access"});
    const user = await User.findById(req.session.userId).select('-password');
    if(!user) return res.status(404).send({message:"User Not Found"});

    res.send(user);
}


exports.logout = (req,res) => {
    req.session.destroy(err => {
        if(err) return res.status(500).send({message: "Login Failed"});
        res.clearCookie('connect.sid').send({message: "Logout Successful"}); 
    } )

}