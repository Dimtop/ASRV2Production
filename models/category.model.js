const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    
    name:{
        type:String
    },
    code:{
        type:String
    }
});


module.exports = mongoose.model("Category",categorySchema, "Categories");