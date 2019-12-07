const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctor_model = new Schema({ 
    doc_name:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    emailid:{
        type:String,
        require:true
    },
    ph_no:{
        type:String,
        require:true
    },
    qualification:{
        type:String,
        require:true
    },
    surgery_attended:{
        type:String,
        require:true
    },
    success_ratio:{
        type:String,
        require:true
    },
    specalist_at:[]
});
module.exports = doctor_model;