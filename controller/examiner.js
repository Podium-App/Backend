'use strict'

const controller = require("../controller/controller"); 

module.exports.makeTest = async (subjectname, length) =>{
    const response = await controller.getTest(subjectname); 
    console.log(response)
    let exam = []
    if(response.status == 200){
        const maxLength = response.response.questions.length;  

        if(maxLength < length ){
            return {"status":400, "Report": "This test does not have that many questions. Maximum number of questions is "+maxLength, "MaxLength": maxLength}; 
        }
        const picked = generate18Numbers(maxLength, length); 
        picked.forEach(item =>{
            exam.push(response.response.questions[item])
        })

        return {"status":200, "Sequence": picked , "Exam": exam}; 
    }else{
        return response
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

