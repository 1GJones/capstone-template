import {Schema,model}from "mongoose";

const roleSchema = new Schema({
   rolename:{
    type:String,
    enum:["user","admin"]
   } 
})
export default roleSchema