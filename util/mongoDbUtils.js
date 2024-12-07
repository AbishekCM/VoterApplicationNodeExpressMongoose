require('dotenv').config();

const mongoose=require('mongoose');
//const MONGO_URI=process.env.MONGODB_URL_LOCAL;
const MONGO_URI=process.env.MONGODB_URL;


mongoose.connect(MONGO_URI);

const db=mongoose.connection;

db.on('connected',()=>{
  console.log("Connected to MongoDb server");
});

db.on('error',(e)=>{
  console.log("MongoDb Error:",e);
})

db.on('disconnected',()=>{
  console.log("MongoDb disconnected");
})

module.exports={db};



