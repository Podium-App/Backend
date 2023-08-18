'use strict'


const Subjects = require('../database/Subjects'); 
const Test = require("../database/Test"); 


module.exports.createExam = async ({subjectname, scope, questions}) =>{
    const counts = questions.length ; 
    const subject = new Subjects({
        subjectname, scope, counts
    })
    const test = new Test({
        subjectname, questions
    })

    try{
        const data= await subject.save(); 
        const dat = await test.save(); 
        
        return {"status":200,"data":data, "dat":dat}; 
        }catch(error){
            return {"status":400,"error":error}; 
        }
}


module.exports.getAllSubjects = async () =>{
    const response = await Subjects.find(); 

    if(!response){
        return {"status":400}; 
    }else{
        return{"status":200, response}; 
    }
}


module.exports.getTest = async(subjectname)=>{
    const response = await Test.findOne({subjectname});  
    
    if(!response){
        return {"status":400, "Error": "Could not find test."}; 
    }else{
        return{"status":200, response}; 
    }
}