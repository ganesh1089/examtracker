const express =
require("express");

const router =
express.Router();

const User =
require("../models/User");

router.post(
"/setup",
async(req,res)=>{

try{

const{
userId,
selectedExam,
dailyTarget
}=req.body;

await User.findByIdAndUpdate(
userId,
{
selectedExam,
dailyTarget
}
);

res.json({
message:"Saved"
});

}
catch(err){

res.status(500).json({
message:"Server Error"
});

}

});

module.exports =
router;