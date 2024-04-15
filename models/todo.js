const mongoose=require("mongoose");
const schema=mongoose.Schema;

const todoSchema=new schema({
  todo:{
    type: String,
    required: true
  }
});

const todo=mongoose.model('todo' , todoSchema);
module.exports=todo;