// Inject Modules
const express = require('express');
const healthcareCtrl = require('../controllers/healthcareCtrl');

const router = express.Router();


router.post('/specalist',[healthcareCtrl.healthSpecalist]);

router.post('/doctor',[healthcareCtrl.healthDoctor]);

router.get('/getdata/:type',[healthcareCtrl.commonGet]);

router.get('/getspecificdata/:type/:id',[healthcareCtrl.specificGet]);

router.post('/update',[healthcareCtrl.commonUpdate]);

router.post('/delete',[healthcareCtrl.commonDelete]);


module.exports = router;