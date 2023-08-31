"use strict"

const controller = require("../controller/controller"); 
const examiner = require("../controller/examiner"); 
const Subjects = require('../database/Subjects'); 
const Test = require("../database/Test"); 



module.exports = (app) =>{

    app.route('/').get((req,res)=>{
        res.send("Hello API")
    })


    app.route('/addsubject').post(async (req,res,next)=>{
            const {subjectname, scope, questions} = req.body; 

            //const response = await controller.createExam({subjectname, scope, questions}); 
    })


    app.route('/podium/allsubjects').get(async (req,res) =>{
        //TODO: authorize response

        let token = req.headers['x-access-token'] || req.headers['authorization']


        const response = await controller.getAllSubjects(); 
        if(response.status == 400){
                res.status(400).send({response})
            }else{
                res.status(200).send({response})
            }
    })


    app.route('/podium/onesubject').post(async (req,res) =>{
        //TODO: authorize response
        const {subjectname} = req.body;  
        const response = await controller.getTest(subjectname)
        if(response.status == 400){
                res.status(400).send({response})
            }else{
                res.status(200).send({response})
            }
    })

    app.route("/podium/onecategory").post(async (req,res)=>{
        const {scope} = req.body; 

        const response = await controller.getAllSubjects(); 

        

        if(response.status == 400){
                res.status(400).send({response})
            }else{
                const filteredResponse = response.response.filter(
                    (item) =>{
                        return item.scope === scope
                    }
                )
                res.status(200).send({"status":200,filteredResponse})
            }

    })

    app.route("/podium/getsession").post(async (req,res)=>{
        const {subjectname,length} = req.body
        const reply = await examiner.makeTest(subjectname, length);  
        res.send(reply); 
    })

    app.route("/blvrd/developer/signin").get(async (req,res)=>{

    })

}



 