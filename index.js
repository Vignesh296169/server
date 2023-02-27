const express=require('express');
if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}
const morgan=require('morgan')
const cors=require('cors');
const {connectDb}=require("./db/connectDb")
const {errorHandler}=require("./err/Errorhandler")
// route
const route=require("./Route/taskRoute.js")
const PORT=process.env.PORT ||5000;

const app=express();
//  express configure
app.use(express.json());
app.use(cors())
app.use(morgan("tiny"))
app.use("/api",route)
connectDb()
app.use(errorHandler)
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});



