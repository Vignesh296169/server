const mongoose = require('mongoose');



async function connectDb() {
    try{
         await mongoose.connect(process.env.DB_URL);
        console.log('Connected to database')
    }catch(err){
        console.log(err.message)
    }

    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

module.exports = {connectDb}