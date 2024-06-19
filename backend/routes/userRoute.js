import express from 'express'
import { StatusCodes} from "http-status-codes";
import { User } from '../models/userModel.js';
const userRoute = express.Router();


userRoute.post("/user", async (req,res)=>{
  try {
    const{name,email,contact,password}= req.body;
    if(!name||!email||!contact||!password){
      return res.status(StatusCodes.BAD_REQUEST).json ({msg: "please provide correct format details"});
    }
    await User.create(req.body);
    res.json({msg: "User added succesfully !!"})
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:"Internal server error , try again"});
  }
  
})


userRoute.get("/user", async(req,res)=>{ 
  try {
    const user = await User.find();
    if(!user)
     return res.status(StatusCodes.OK).json({ msg: "user not available"});
res.status(StatusCodes.OK).json({count: user.length, data: user});
    
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:" Internal server error"});   
  }
})


userRoute.get("/user/:id", async(req,res)=>{
const {id}= req.params;
  try {
    const user =  await User.findById(id);
    if(!user)
     return res.status(StatusCodes.NOT_FOUND).json({ msg: `user not found with ${id}`});
res.status(StatusCodes.OK).json({data: user});
    
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:" Internal server error"});
  }
})


userRoute.put("/user/:id", async(req,res)=>{
  res.send(" update the user details")
try {
  const {id}=req.params
  const{name,email,contact,type,password}=req.body;
  if(!name||!email||!contact||!type||!password)
  return res.status(StatusCodes.OK).json({msg:"please provide all fields"});

const result=await User.findByIdAndUpdate(id,req.body);
if(!result)
return res.status(StatusCodes.NOT_FOUND).json({msg:`user with id$(id) not found`});
res.status(StatusCodes.OK).json({msg:"user details updated",data:User});
res.send("Delete the user");
} catch (error) {
  console.log(error);
  res.status(StatusCodes.BAD_GATEWAY).json({msg:"internal server error"});
}

})

export default userRoute;