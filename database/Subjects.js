const mongoose = require('mongoose'); 



const subjectsSchema = new mongoose.Schema(
  {
    subjectname: {
      type: String, 
      unique: true,
      trim: true,
      required:true
    },
    scope: {
      type: String, 
      trim:true,
      required:true,
      default:"Technology"
    },
    counts: {
      type: Number,  
      required:true,
      default:"5"
    }
    }
 
  
);

 
 



const Subject = mongoose.model('Subject', subjectsSchema);

module.exports = Subject;