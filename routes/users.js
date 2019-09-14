let NeDB = require('nedb');
let db = new NeDB({ //stanking the database

    //creating the file
    filename: 'users.db', 
    autoload:true //creating the file in memory
});

module.exports = (app)=>{

    app.get('/users', (req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{

            if(err){ 
            console.log(`error: ${err}`);
            res.status(400).json({
                error: err
            });
            }else{

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users //it is the same that users: users
    
        });
    


            }
        });

        
    });
    
    app.post('/users', (req, res)=>{
    
        
        db.insert(req.body, (err, user)=>{ //entering data into database

            if(err){
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });
            }else{
                res.status(200).json(user);
                
            }

        });
    
    });

};