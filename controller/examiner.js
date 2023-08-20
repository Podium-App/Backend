'use strict'

const controller = require("../controller/controller"); 
const cts = require('../constants/constants'); 
const Test = require("../database/Test"); 
const responder = require("../controller/responder.js"); 

module.exports.makeTest = async (subjectname, length) =>{
    try{
        const response = await Test.findOne({subjectname});  
        let exam = []
        if(response){
            const maxLength = response.questions.length;  

            if(maxLength < length ){
                const result = {
                    "responseFlag":"Failed", 
                    "responseMessage": "This test does not have that many questions. Maximum number of questions is "+maxLength, 
                    "resultData":{
                        "exam":null, 
                        "sequence":null,
                        "MaxLength": maxLength
                    }
                }
                return responder.getResponse({"status":400, "message": cts.Messages.msg22 , result}); 
            }
            const picked = generate18Numbers(maxLength, length); 
            picked.forEach(item =>{
                let {question,options,illustrator} = response.questions[item]; 
                exam.push({question,options,illustrator})
            })
            const result = {
                    "responseFlag":"Ok", 
                    "responseMessage": "Operation successful", 
                    "resultData":{
                        "exam":exam, 
                        "sequence": picked,
                        "MaxLength": maxLength
                    }
                }
            return responder.getResponse({"status":200, "message":cts.Messages.msg2, result}); 
        }else{
                const result = {
                    "responseFlag":"Failed", 
                    "responseMessage": "unable to retrieve test", 
                    "resultData":{
                        "exam":null, 
                        "sequence":null,
                        "MaxLength": maxLength
                    }
                }
                return responder.getResponse({"status":400, "message": cts.Messages.msg21 , result}); 
        }
    } catch(exp){
                const result = {
                    "responseFlag":"Failed", 
                    "responseMessage":  exp.message, 
                    "resultData":{
                        "exam":null, 
                        "sequence":null,
                        "MaxLength": null
                    }
                }
                return responder.getResponse({"status":400, "message": cts.Messages.msg21 , result}); 
    }
    
}



function generate18Numbers(max, length) {
    // Create an array to store the random numbers.
    const numbers = [];
    
    while(numbers.length < length){
        // Generate a random number between 0 and max.
        const number = Math.floor(Math.random() * max) ;

        // Check if the number is already in the array.
        if (!numbers.includes(number) && number <=max ) {
        // The number is not in the array, so add it.
        numbers.push(number);
        }
    }
  
  // Return the array of random numbers.
  return numbers;
}

