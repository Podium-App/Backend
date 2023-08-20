'use strict'



module.exports.getResponse = (response) => { 
    let reply =  {
        "code": responseCode(response.message), 
        "message": response.message, 
        "moreInfo": "thisisjames.xyz/podium/api", 
        "lang":"en", 
        "status":response.status,
        "result": response.result
    }
    return reply; 
}

let responseCode = (message) => {
    switch(message){
        case "Successfully retrieved list of subjects":
            return 1;  
        case "Failed retrieve list of subjects":
            return 11; 
        case "Successfully retrieved requested test":
            return 2;
        case "Failed to find requested test. No such subject in the database":
            return 21;  
        case "Failed to load session. Number of questions exceed available question list.":
            return 22;
        case "Successfully found the subject searched":
            return 3;
        case "Cannot find  any instance of the requested search.":
            return 31;
        case "Successfully updated records for this subject":
            return 4;
        case "Failed to updated record for this subject":
            return 41;
        case "Successfully retrieved records for the given subject":
            return 5;
        case "Failed to find records for the given subject":
            return 51;
        case "Successfully created new user":
            return 6;
        case "Failed to create new user":
            return 61;
        case "Successfully identified user":
            return 7;
        case "Failed to identify this user":
            return 71;
        case "We are unable to verify your access credentials.":
            return 8;
        default:
            return 0;  
    }
}




/**
 * WHAT ARE WE DOING WITH THIS API 
 * 1. request list of subjects 
 * 2. get test for a given subject
 * 3. search database for a given subject
 * 4. update records for a given subject
 * 5. get records for a given subject (number or people who have taken the test and how many have made it)
 * 6. create new  user (create id for a user when they come)
 * 7. identify a returning user
 * 8. invalid api token
 **/



