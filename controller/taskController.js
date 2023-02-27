
const Task=require("../models/Task")
const initial=async (req, res) => {
    try {
      const task = await Task.find();
      res.status(200);
      res.json({ tasks: task });
    } catch (err) {
      console.log(err.message);
    }
  }
const remove= async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) {
        const errr = new Error("enter id");
        res.status(400);
        return next(errr);
      }
      await Task.deleteOne({ id });
      // const task = await Task.find()
      res.status(200);
      res.json({message:"task deleted successfully"})
  
    } catch (err) {
      console.log(err.message);
    }
  }
  const update= async (req, res, next) => {
    try{
     const { id } = req.params;
     if (!id) {
       const errr = new Error("enter id");
       res.status(400);
       return next(errr);
     }
     const { title } = req.body;
     if (!title) {
       const errr = new Error("enter title");
       res.status(400);
       return next(errr);
     }
     await Task.findByIdAndUpdate(id,{title:title})
     const task = await Task.findOne({_id:id});
     res.status(200)
     res.json({ task:task });
    }catch (err) {console.log(err.message)}
   }
   const write=async (req, res, next) => {
    try {
      const { title } = req.body;
      if (!title) {
        const errr = new Error("enter title");
        res.status(400);
        return next(errr);
      }
     const task= await Task.create({ title: title});
  
      // const task = await Task.find();
  
      res.status(200);
      // res.json({ tasks: task });
      res.json({tasks:task})
    } catch (err) {
      console.log(err.message);
    }
  }
  module.exports={initial,remove,update,write}