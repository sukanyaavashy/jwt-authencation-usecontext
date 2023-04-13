const mongoose = require('mongoose')

let Registeruser = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
    },
    confirmPassword:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    
})

module.exports = mongoose.model('Registeruser',Registeruser)