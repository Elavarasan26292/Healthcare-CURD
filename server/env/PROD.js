module.exports = {
    serverPort: 51509,
    coreHrApi: 'https://hcmcloud.excelityglobal.com/WSEDM/api',
    dbUrl: 'mongodb://10.10.1.4:27017',
    connectdbUrl: '10.10.1.4:27017/',
    lmsApi:'https://hcmcloud.excelityglobal.com/lms/api/v1.0',
    clientdb: 'mongodb://10.10.1.4:27017/',
    ruleEngineApi: 'https://hcmcloud.excelityglobal.com/hcm-rules/api/v1.0',
    'dbuser': {
        config: {
            autoIndex: false
        },
        user: process.env.dbuser,
        pass: process.env.dbpass,
        useMongoClient: true
    },
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
    } ,cds: {
        url: 'https://hcmcloud.excelityglobal.com/CDS/'
    }
};