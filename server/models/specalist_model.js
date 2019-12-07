const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const specalist_model = new Schema({ 
    specalist_at:{
        type:String,
        require:true
    },
    degree:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
});
module.exports = specalist_model;