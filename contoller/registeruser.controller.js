const Registeruser = require('../model')
const bcrypt = require("bcrypt")

exports.post = async(req,res) => {
    const{username,email,password,confirmPassword} = req.body

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }
        
    if(password !== confirmPassword){
        return res.status(400).json({message: 'Passwords do not match'})
    }

    try{
        let exist = await Registeruser.findOne({email})
        if(exist){
            return res.status(400).json({message:'Email already registered'})
        }
        
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10); 

    // create new user
    let newUser = Registeruser({
        username,
        email,
        password:hashedPassword
    })

    await newUser.save()
    // res.send(newUser.password)
    // console.log(newUser)
    res.status(200).json({message:'Registered Successfull'})
    res.redirect("/login")


    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Internal server error'})
    } 
}