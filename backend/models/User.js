const mongoose =
require("mongoose");

const userSchema =
new mongoose.Schema({

name:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
}
,

dailyTarget: {
    type: Number,
    default: 10
},
selectedExam: {
    type: String,
    default: ""
}
},{
timestamps:true
});

module.exports =
mongoose.model(
"User",
userSchema
);