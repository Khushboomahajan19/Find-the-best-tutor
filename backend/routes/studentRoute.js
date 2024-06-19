import express from 'express'
import { StatusCodes} from "http-status-codes";
import { Student } from '../models/studentModel.js';
const studentRoute = express.Router();


studentRoute.post("/student", async (req,res)=>{
  try {
    const{name,email,contact,type,password}= req.body;
    if(!name||!email||!contact||!type||!password){
      return res.status(StatusCodes.BAD_REQUEST).json ({msg: "please provide correct format details"});
    }
    await Student.create(req.body);
    res.json({msg: "Student added succesfully !!"})
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:"Internal server error , try again"});
  }
  
})


studentRoute.get("/student", async(req,res)=>{ 
  try {
    const student = await Student.find();
    if(!student)
     return res.status(StatusCodes.OK).json({ msg: "student not available"});
res.status(StatusCodes.OK).json({count: student.length, data: student});
    
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:" Internal server error"});   
  }
})


studentRoute.get("/student/:id", async(req,res)=>{
const {id}= req.params;
  try {
    const student =  await Student.findById(id);
    if(!student)
     return res.status(StatusCodes.NOT_FOUND).json({ msg: `student not found with ${id}`});
res.status(StatusCodes.OK).json({data: student});
    
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_GATEWAY).json({msg:" Internal server error"});
  }
})


studentRoute.put("/student/:id", async(req,res)=>{
  res.send(" update the student details")
try {
  const {id}=req.params
  const{name,email,contact,type,password}=req.body;
  if(!name||!email||!contact||!type||!password)
  return res.status(StatusCodes.OK).json({msg:"please provide all fields"});


const result=await Student.findByIdAndUpdate(id,req.body);
if(!result)
return res.status(StatusCodes.NOT_FOUND).json({msg:`student with id$(id) not found`});
res.status(StatusCodes.OK).json({msg:"student details updated",data:Student});
res.send("Delete the student");
} catch (error) {
  console.log(error);
  res.status(StatusCodes.BAD_GATEWAY).json({msg:"internal server error"});
}

})

export default studentRoute;