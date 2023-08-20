'use strict'


const jwt = require('jsonwebtoken'); 
const constants = require("../constants/constants"); 


module.exports.authorizeRequest =(token)=>{
    let token  = token.replace(/^Bearer\s+/,"");

    if(token){
        jwt.verify(token,constants.Token_My_Secret, (err, decoded)=>{
            if(err){
                return {
                    success: false, 
                    message:constants.Messages.msg8
                }
            }else{
                return {
                    success: true, 
                    message:"Verified"
                }
            }
        })
    }else{
        return {
                    success: false, 
                    message:"We are unable to verify your access credentials."
                }
    }
}

module.exports.signApplication =()=>{
    const token = jwt.sign({userId: user._id}, constants.Token_My_Secret,{
        expiresIn: '1 Year'
    }); 
    return token; 
}