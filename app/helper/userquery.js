var User = require('../models/user.js');
module.exports = {
    emailfind: (obj) => {
        return new Promise((resolve, reject) => {
            console.log('In User-> Find Eamil');
            User.findOne({ 'email': obj.email }, (err, data) => {
                console.log('Data: ', data);
                if (err) reject(err);
                else resolve(data);
            });
        });
},
   insertdata: (obj) => {
        return new Promise((resolve, reject) => {
            console.log('In User-> Insert Data ', obj);
            User.create({ 'name': obj.name, 'email': obj.email, 'password': obj.password },
                (err, data) => {
                    console.log('Insertion Callback');
                    if (err) {
                        console.log(err);
                        reject(err);
                    } else resolve(data);
                });
        });
    },
    login: (obj) => {
        return new Promise((resolve , reject) =>{
            console.log('in user login function======>');
            User.findOne(obj,(err,data) =>{
                if(err) reject(err);
                else resolve(data);
            });
        });
    },
    getuser: ()=> {
        return new Promise((resolve , reject) =>{
            console.log('user data fetching');
            User.find((err,data) =>{
               if(err) reject(err);
               else resolve(data);
            });
        });

    }

}