import  express  from "express";
import 'dotenv/config'
import dbConnect from "./dbConnect.js";
import tutorRoute from "./routes/userRoute.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import studentRoute from "./routes/studentRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const start= async() => {
  try {
    await dbConnect(process.env.MONGO_URL);
    console.log("Database connected");
    app.listen(PORT, ()=>{
  console.log(" server is started....");

});
  } catch (error) {
    console.log(error);
  }
}
start ();
// tell us where the server will start

app.get("/",(req,res)=>{
  res.send(" <h1> welcome to tutor finder</h1>")
})

app.use(tutorRoute);
app.get("*",(req,res)=>{
  res.send(" how may i help you !!");
})