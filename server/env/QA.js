module.exports = {
    serverPort: 51505,
    coreHrApi: 'https://hcmuat.excelityglobal.com/WSEDM/api',
    dbUrl: 'mongodb://10.204.135.173:27017',
    lmsApi:'https://hcmuat.excelityglobal.com/lms/api/v1.0',
    clientdb: 'mongodb://10.204.135.173:27017/',
    ruleEngineApi: 'https://hcmuat.excelityglobal.com/hcm-rules/api/v1.0',
    mail: {
        // ======================QA cnfig start

        service: 'excelityglobal.com',
        host: '10.204.135.252',
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