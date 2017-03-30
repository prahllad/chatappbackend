var chatlog = require('../models/chatlog');
module.exports = {
  insertChat : (obj) =>{
    return new Promise((resolve,reject)=>{
    chatlog.create(obj,(err,data)=>{
      console.log('insertion callback');
      if(err){
        console.log(err);
        reject(err);
      } else{
        resolve(data);
      }
    });
  });
 },
 fetchChat : (obj) =>{
   return new Promise((resolve,reject)=>{
     //chatlog.find()
   })
 } 
}
