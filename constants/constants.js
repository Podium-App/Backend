require('dotenv').config(); 

module.exports = {
    SERVER_PORT: process.env.PORT || 6000,
    SERVER_DB_URI: process.env.mongo, 
    Token_My_Secret: process.env.mySecret,

    Messages: {
        msg1:"Successfully retrieved list of subjects",
        msg11:"Failed retrieve list of subjects", 
        msg2:"Successfully retrieved requested test", 
        msg21:"Failed to find requested test. No such subject in the database",
        msg22:"Failed to load session. Number of questions exceed available question list.", 
        msg3:"Successfully found the subject searched",
        msg31:"Cannot find  any instance of the requested search.",
        msg4:"Successfully updated records for this subject",
        msg41:"Failed to updated record for this subject",
        msg5:"Successfully retrieved records for the given subject",
        msg51:"Failed to find records for the given subject",
        msg6:"Successfully created new user",
        msg61:"Failed to create new user",
        msg7:"Successfully identified user",
        msg71:"Failed to identify this user",
        msg8:"We are unable to verify your access credentials."
    }
}