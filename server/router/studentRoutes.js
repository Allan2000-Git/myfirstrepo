const express = require('express');
const router = express.Router();
const { registerStudent, loginStudent } = require('../controllers/studentControllers');

router.route('/register').post(registerStudent);
router.post("/login", loginStudent);

module.exports = router;