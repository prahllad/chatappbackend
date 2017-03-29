let databasefunction = require('../helper/userquery');
let errors = require('../config');
module.exports = {
    registration: (req,res,next) => {
        if (!req.body) res.satus(400).send({ 'status': 0, 'data': 'Unauthorized User' });
        else{
            let obj = req.body;
            databasefunction.emailfind(obj).then((resol)=>{
                if(resol === null){
                console.log("objec>>>> ",obj);
                databasefunction.insertdata(obj).then((resol)=>{
                if(resol === null){
                    res.status(500).send({ 'status': 0, 'err': 'Internal Server Error' });
                }
                else{
                    console.log('success');
                    res.status(200).send({ 'status': 1, 'data': resol })
                }
            }).catch((rej) => res.status(500).send({ 'status': 0, 'err': 'Internal Server Error' }));
            } else{
                res.satus(500).send({'status': 0 , 'err' : 'email allready exist'});
            }
          }).catch((rej) => res.status(500).send({ 'status': 0, 'err': 'email allready exist' }));
         }
    },
    login: (req,res,next) =>{
        let obj = {
            'email':req.body.email,
            'password': req.body.password
        }
        databasefunction.login(obj).then((resol)=>{
            if(resol === null){
                res.status(500).send({'status': 0 , 'err' : 'user does not exist'})
            }
            else{
                res.status(200).send({'status': 1, 'data' : resol})
            }
        }).catch((rej)=> res.status(500).send({'status':0, 'err' : 'error in loginfunction'}));

    },
    fetchuser: (req,res,next) =>{
      console.log(req.query);
        databasefunction.getuser(req.query).then((resol) =>{
            if(resol === null){
                res.status(500).send({'status': 0, 'err' : 'error'})
            }
            else{
                res.status(200).send({'status': 1, 'data': resol})
            }
        }).catch((rej)=> res.status(500).send({'status' :0, 'err':'data not fetched'}));
    }
}
