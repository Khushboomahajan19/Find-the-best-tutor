import mongoose from "mongoose";

const tutorschema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experience:{
    type:Number,
    required:true
  },
   specialization:{
    type:String,
    required:true
  }
},
{
  timestamp:true,
}
);
export const Tutor= mongoose.model('Tutor',tutorschema);