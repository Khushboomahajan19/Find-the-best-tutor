import express from 'express'
import { StatusCodes} from "http-status-codes";
import { Tutor } from '../models/tutorModel.js';

const tutorRoute = express.Router();


tutorRoute.post("/tutor", async (req,res)=>{
  try {
    const{name,qualification,experience,specialization}= req.body;
    if(!name||!qualification||!experience||!specialization){
      return res.status(StatusCodes.BAD_REQUEST).json ({msg: "please provide correct format details"});
    }
    await Tutor.create(req.body);
    res.json({msg: "Tutor added succesfully !!"})
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:"Internal server error , try again"});
  }
  
})


tutorRoute.get("/tutor", async(req,res)=>{ 
  try {
    const tutor = await Tutor.find();
    if(!tutor)
     return res.status(StatusCodes.OK).json({ msg: "tutor not available"});
res.status(StatusCodes.OK).json({count: tutor.length, data: tutor});
    
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:" Internal server error"});   
  }
})


tutorRoute.get("/tutor/:id", async(req,res)=>{
const {id}= req.params;
  try {
    const tutor =  await Tutor.findById(id);
    if(!tutor)
     return res.status(StatusCodes.NOT_FOUND).json({ msg: `tutor not found with ${id}`});
res.status(StatusCodes.OK).json({data: tutor});
    
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:" Internal server error"});
  }
})


tutorRoute.put("/tutor/:id", async(req,res)=>{
  res.send(" update the tutor details")
try {
  const {id}=req.params
  const{name,qualification,experience,specialization}=req.body;
  if(!name||qualification||!experience||!specialization)
  return res.status(StatusCodes.OK).json({msg:"please provide all fields"});

const result=await Tutor.findByIdAndUpdate(id,req.body);
if(!result)
return res.status(StatusCodes.NOT_FOUND).json({msg:`tutor with id$(id) not found`});
res.status(StatusCodes.OK).json({msg:"tutor details updated",data:Tutor});
res.send("Delete the tutor");
} catch (error) {
  console.log(error);
  res.status(StatusCodes.BAD_GATEWAY).json({msg:"internal server error"});
}

})

export default tutorRoute;