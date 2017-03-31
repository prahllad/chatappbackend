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
     chatlog.find({ $or: [ { 'sender': obj.sender,'reciver':obj.reciver}, { 'sender': obj.reciver ,'reciver': obj.sender} ] },
     (err,data)=>{
       console.log('fetching conversation');
       if(err){
         console.log(err);
         reject(err);
       } else{
         resolve(data);
       }
     });
   });
 } 
}
