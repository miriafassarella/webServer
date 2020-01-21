let NeDB = require('nedb');
const {check, validationResult} = require('express-validator');
let db = new NeDB({ //stanking the database
    //creating the file
    filename: 'users.db', 
    autoload:true //creating the file in memory
});

module.exports = (app)=>{

    let route = app.route('/users');

    route.get((req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{

            if(err){ 
                app.utils.error.send(err, req, res);
                
            }else{

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users //it is the same that users: users
    
                });
            }
        });
});
    
    route.post([check('_name', 'O nome é obrigatório').not().isEmpty(),
                check('_email', 'O email é obrigatório').isEmail(),
                check('_password', 'O password é obrigatório').not().isEmpty()], 
    
    (req, res)=>{

        const errors = validationResult(req);

        if(!errors.isEmpty()){

            app.utils.error.send(errors, req, res);
            return false; //console is still running
        }

        db.insert(req.body, (err, user)=>{ //entering data into database

            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
                
                
            }
            
        });
});

    let routeId = app.route('/users/:id');

    routeId.get((req, res)=>{

        db.findOne({_id:req.params.id}).exec((err, user)=>{

            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
                
            }
         });
    });

    routeId.put([check('_name', 'O nome é obrigatório').not().isEmpty(),
    check('_email', 'O email é obrigatório').isEmail(),
    check('_password', 'O password é obrigatório').not().isEmpty()], 
    (req, res)=>{//editing a user

        const errors = validationResult(req);

        if(!errors.isEmpty()){

            app.utils.error.send(errors, req, res);
            return false; //console is still running
        }

    db.update({_id:req.params.id}, req.body, err=>{ //update method is of the database nedb
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(Object.assign(req.body, req.params));
                
            }
        });
     });

    routeId.delete((req, res)=>{

        db.remove({_id:req.params.id}, {}, err=>{

            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(req.params);
                
            }
        });
    });
};