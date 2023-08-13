"use strict"

const controller = require("../controller/controller"); 
const Subjects = require('../database/Subjects'); 
const Test = require("../database/Test"); 



module.exports = (app) =>{

    app.route('/').get((req,res)=>{
        res.send("Hello API")
    })


    app.route('/addsubject').post(async (req,res,next)=>{
            const {subjectname, scope, questions} = req.body; 

            const response = await controller.createExam({subjectname, scope, questions}); 

            if(response.status == 400){
                res.status(400).send({response})
            }else{
                res.status(200).send({response})
            }

    })


    app.route('/podium/allsubjects').get(async (req,res) =>{
        //TODO: authorize response
        const response = await controller.getAllSubjects(); 
        if(response.status == 400){
                res.status(400).send({response})
            }else{
                res.status(200).send({response})
            }
    })


    app.route('/podium/onesubject').get(async (req,res) =>{
        //TODO: authorize response
        const {subjectname} = req.body; 
        console.log(subjectname) 
        const response = await controller.getTest(subjectname)
        if(response.status == 400){
                res.status(400).send({response})
            }else{
                res.status(200).send({response})
            }
    })

}