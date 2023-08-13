const mongoose = require('mongoose'); 



const testSchema = new mongoose.Schema(
  {
    subjectname: {
      type: String, 
      unique: true,
      trim: true,
      required:true
    },
    questions: {
      type: Array, 
      trim:true,
      required:true,
      default:"Technology"
    }

    }
 
  
);

 
const Test = mongoose.model('Test', testSchema);

module.exports = Test;