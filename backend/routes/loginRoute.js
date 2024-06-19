import express from 'express'
import { StatusCodes} from "http-status-codes";
const loginRoute = express.Router();


loginRoute.post("/login", async (req,res)=>{
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
export default loginRoute;
