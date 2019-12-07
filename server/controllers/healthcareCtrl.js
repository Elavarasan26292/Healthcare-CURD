// Inject Modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const speaclistSchema = require("../models/specalist_model")
const doctorSchema = require("../models/doctor_model")
const selectDb = require('../common/select-db');

module.exports = {
    healthSpecalist:((req,res,next) =>{
        const db = selectDb("HEALTHCARE");
        const specalist_instance = db.model('specalist_data', speaclistSchema, "specalist_data");
        const spdata=new specalist_instance(req.body);
        spdata.save(function(err,spresult){
            if(err){
                res.json({
                    status:false,
                    code:400,
                    error:err
                })
            }else{
                res.json({
                    status:true,
                    code:200
                })
            }
        })
    }),
    healthDoctor:((req,res,next) =>{
        console.log("This is data",req.body)
        const db = selectDb("HEALTHCARE");
        const doctor_instance = db.model('doctor_data', doctorSchema, "doctor_data");
        const docdata=new doctor_instance(req.body);
        docdata.save(function(err,docresult){
            if(err){
                res.json({
                    status:false,
                    code:400,
                    error:err
                })
            }else{
                res.json({
                    status:true,
                    code:200
                })
            }
        })
    }),
    commonGet:((req,res,next) =>{
        const db = selectDb("HEALTHCARE");
        let common_instance;
        if(req.params.type=="sp"){
            common_instance = db.model('specalist_data', speaclistSchema, "specalist_data");
        }else if(req.params.type=="doc"){
            common_instance = db.model('doctor_data', doctorSchema, "doctor_data");
        }else{
            res.json({
                status:false,
                code:400,
                error:"update match not found"
            })
        }
        common_instance.find({},function(err,healthdata){
            if(err){
                res.json({
                    status:false,
                    code:400,
                    error:err
                })
            }else{
                res.json({
                    status:true,
                    code:200,
                    data:healthdata
                })
            }
        })    
    }),
    specificGet:((req,res,next) =>{
        const db = selectDb("HEALTHCARE");
        let common_instance;
        if(req.params.type=="sp"){
            common_instance = db.model('specalist_data', speaclistSchema, "specalist_data");
        }else if(req.params.type=="doc"){
            common_instance = db.model('doctor_data', doctorSchema, "doctor_data");
        }else{
            res.json({
                status:false,
                code:400,
                error:"update match not found"
            })
        }
        common_instance.findOne({
            _id:req.params.id
        },function(err,healthdata){
            if(err){
                res.json({
                    status:false,
                    code:400,
                    error:err
                })
            }else{
                res.json({
                    status:true,
                    code:200,
                    data:healthdata
                })
            }
        })    
    }),
    commonUpdate:((req,res,next) =>{
        const db = selectDb("HEALTHCARE");
        let common_instance;
        if(req.body.type=="sp"){
            common_instance = db.model('specalist_data', speaclistSchema, "specalist_data");
        }else if(req.body.type=="doc"){
            common_instance = db.model('doctor_data', doctorSchema, "doctor_data");
        }else{
            res.json({
                status:false,
                code:400,
                error:"update match not found"
            })
        }
        let content=Object.assign({}, req.body);
        delete content.type;
        common_instance.update({
            "_id":req.body._id
        },{$set:req.body},function(err,updtresp){
            if(err){
                res.json({
                    status:false,
                    code:400,
                    error:err
                })
            }else{
                res.json({
                    status:true,
                    code:200
                })
            }
        })    
    }),
    commonDelete:((req,res,next) =>{
        const db = selectDb("HEALTHCARE");
        let common_instance;
        if(req.body.type=="sp"){
            common_instance = db.model('specalist_data', speaclistSchema, "specalist_data");
        }else if(req.body.type=="doc"){
            common_instance = db.model('doctor_data', doctorSchema, "doctor_data");
        }else{
            res.json({
                status:false,
                code:400,
                error:"update match not found"
            })
        }
        common_instance.remove({
            "_id":req.body._id
        },function(err,delresp){
            if(err){
                res.json({
                    status:false,
                    code:400,
                    error:err
                })
            }else{
                res.json({
                    status:true,
                    code:200
                })
            }
        })    
    })
}
     