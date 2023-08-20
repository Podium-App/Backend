'use strict'


const Subjects = require('../database/Subjects'); 
const Test = require("../database/Test"); 
const cts = require('../constants/constants'); 
const responder = require("../controller/responder.js"); 


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
        const result = {
            "responseFlag":"Failed", 
            "responseMessage": "Operation not successful", 
            "resultData":null
        }
        return responder.getResponse({"status":400,"message": cts.Messages.msg11, result }); 
    }else{
        
        const subjectList =  formatSubjectReponse(response); 
        const result = {
            "responseFlag":"Ok", 
            "responseMessage": "Operation successful", 
            "resultData":subjectList
        }
        return responder.getResponse({"status":200, "message":cts.Messages.msg1, result}) ; 
    } 
}


module.exports.getTest = async(subjectname)=>{
    const response = await Test.findOne({subjectname});  
    
    if(!response){
        const result = {
            "responseFlag":"Failed", 
            "responseMessage": "Operation not successful", 
            "resultData":null
        }
        return responder.getResponse({"status":400, "message": cts.Messages.msg31,result}); 
    }else{
        const result = {
            "responseFlag":"Ok", 
            "responseMessage": "Operation successful", 
            "resultData":response
        }
        return responder.getResponse({"status":200, "message": cts.Messages.msg3,result}); 
        
    }
}


function formatSubjectReponse(response){
    let subjects = []
    response.forEach(item =>{
        const {subjectname,scope,counts,_id} = item 
        subjects.push({subjectname,scope,counts,_id })
    })
    return subjects
}