let NeDB = require('nedb');
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
    
    route.post((req, res)=>{
    
        
        db.insert(req.body, (err, user)=>{ //entering data into database

            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(user);
                
            }

        });
    
    });

};