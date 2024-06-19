import mongoose from "mongoose";

const Userschema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  contact:{
    type:Number,
    required:true
  },
  //  type:{
  //   type:String,
  //   enum:{
  //     values:[ 'student','tutor'],
  //     message:"{VALUE} is not valid"
  //   }
  // },

  password:{
    type:String,
    required:true
  }
},
{
  timestamp:true,
}
);
export const User= mongoose.model('User',Userschema);