const request = require("request");
const config = require("../config/config")
// const leaveConfiguration = require("../models/leave-creation-model");
// const employeLeaveProfile = require("../models/employee-leave-profile-model");
//aa
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0

module.exports = {
    setHeaders: (req, res, next) => {
        const headers = {
            "Content-type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"]
        };
        req.headers = headers;
        next();
    },
    validatethetoken: (req, res, next) => {
        let _headers = {
            "Content-Type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"],
        }
        request({
            method: "GET",
            uri: config.coreHrApi + "/remindertokenvalidator",
            headers:_headers,
        }, (err, resData, body) => {
            if (err) {
                return response.error(res, 500, err)
            } else {
                var parsedata = JSON.parse(body);
                if(parsedata.status==true){
                    next();
                }else{
                    res.json({
                        "status":false,
                        "message":"token_validation_is_falied"
                    })
                }
            }
        })
    },
    fetchEmployeeMasterInfo: (req, res, next) => {
        let _headers = {
            "Content-Type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"],
        }
        request({
            method: "POST",
            uri: config.coreHrApi + "/reminderemployeeinfo",
            headers:_headers,
            body: JSON.stringify(req.body)
        }, (err, resData, body) => {
            if (err) {
                return response.error(res, 500, err)
            } else {
                var parsedata = JSON.parse(body);
                req.employee_data=parsedata;
                next();
            }
        })
    },
    fetchtoEmployeeMasterInfo: (req, res, next) => {
        req.body.reminder_config=req.body.email_to_config
        let _headers = {
            "Content-Type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"],
        }
        request({
            method: "POST",
            uri: config.coreHrApi + "/remindercoreapi",
            headers:_headers,
            body: JSON.stringify(req.body)
        }, (err, resData, body) => {
            if (err) {
                return response.error(res, 500, err)
            } else {
                var parsedata = JSON.parse(body);
                req.email_to_datas=parsedata;
                next();
            }
        })
    },
    fetchccEmployeeMasterInfo: (req, res, next) => {
        req.body.reminder_config=req.body.email_cc_config;
        let _headers = {
            "Content-Type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"],
        }
        request({
            method: "POST",
            uri: config.coreHrApi + "/remindercoreapi",
            headers:_headers,
            body: JSON.stringify(req.body)
        }, (err, resData, body) => {
            if (err) {
                console.log(err)
                return response.error(res, 500, err)
            } else {
                var parsedata = JSON.parse(body);
                req.email_cc_datas=parsedata;
                next();
            }
        })
    },
    fetchtoEmployeeMasterEmail: (req, res, next) => {
        let _headers = {
            "Content-Type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"],
        }
        if(req.config.email_to_config.length>0){
            req.body.prsn_intn_id=req.body.prsnIntnId;
            req.body.reminder_config=req.config.email_to_config
            request({
                method: "POST",
                uri: config.coreHrApi + "/remindercoreapi",
                headers:_headers,
                body: JSON.stringify(req.body)
            }, (err, resData, body) => {
                if (err) {
                    console.log("This is the error")
                    return response.error(res, 500, err)
                } else {
                    var parsedata = JSON.parse(body);
                    req.email_to_datas=parsedata;
                    next();
                }
            })
        }else{
            res.json({
                "status":false,
                "msg":"no_emailto_config"
            })
        }
    },
    fetchccEmployeeMasterEmail: (req, res, next) => {
        let _headers = {
            "Content-Type": "application/json",
            "clientsid": req.headers.clientsid,
            "x-access-token": req.headers["x-access-token"],
        }
        if(req.config.email_cc_config.length>0){
            req.body.prsn_intn_id=req.body.prsnIntnId;
            req.body.reminder_config=req.config.email_cc_config;
            request({
                method: "POST",
                uri: config.coreHrApi + "/remindercoreapi",
                headers:_headers,
                body: JSON.stringify(req.body)
            }, (err, resData, body) => {
                if (err) {
                    console.log(err)
                    return response.error(res, 500, err)
                } else {
                    var parsedata = JSON.parse(body);
                    req.email_cc_datas=parsedata;
                    next();
                }
            })
        }else{
            req.email_cc_datas=[];
            next();
        }
    },
}