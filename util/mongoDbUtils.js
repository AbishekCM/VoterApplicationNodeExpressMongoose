const mongoose=require('mongoose');
const MONGO_URI="mongodb://127.0.0.1:27017/voters";


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



