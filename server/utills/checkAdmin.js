
const Admin=require("../models/adminModel");

const checkAdmin=(req,res,next)=>{
    let id=req.body.adminId;
    Admin.findById(id).then(admin=>{
        if(!admin){
            res.status(400).json({error:'admin not found'});
        }
        
        if(admin.isAdmin){
            next();
        }else{
            res.status(401).json({
                error:"not admin ",
            });
        }
    })
}