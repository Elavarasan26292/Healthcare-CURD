module.exports = {
    serverPort: 51550,
    coreHrApi: 'http://10.10.2.28/WSEDM/api',
    dbUrl: 'mongodb://10.10.2.28:27017',
    lmsApi:'http://10.10.2.28:51504/lms/api/v1.0',
    clientdb: 'mongodb://10.10.2.28:27017/',
    ruleEngineApi: 'https://hcmcloud.excelityglobal.com/hcm-rules/api/v1.0',
    mail: {
        // ======================QA cnfig start
         service: 'excelityglobal.com',
        host: '10.204.135.251',
        secure: false,
        port: 25,
        tls: {
            rejectUnauthorized: false
        },
        debug: true
        // ======================QA cnfig END
    },
    cds: {
        url: 'https://hcmcloud.excelityglobal.com/CDS/'
    }
};